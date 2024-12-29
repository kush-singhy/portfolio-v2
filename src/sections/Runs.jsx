import { useState, useEffect } from 'react';
import { getStravaActivities } from '../services/stravaApi';
import RunCard from '../components/RunCard';

export default function Runs() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const data = await getStravaActivities();
        setActivities(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  if (loading) return <div>Loading activities...</div>;
  if (error) return <div>Error loading activities: {error}</div>;

  // Find longest run
  const longestRun = activities.reduce(
    (max, activity) =>
      activity.distance > (max?.distance || 0) ? activity : max,
    null
  );

  return (
    <section id="runs" className="flex flex-col gap-4">
      <div className="relative">
        <p className="relative z-10 text-2xl font-bold">Runs</p>
        <span className="absolute bg-[#ABE2CB] w-[60px] h-[15px] bottom-0 -left-1 rotate-2" />
      </div>

      <div>
        <p className="text-lg font-semibold mb-2">Longest Run</p>
        {longestRun && <RunCard run={longestRun} />}
      </div>

      <div>
        <p className="text-lg font-semibold mb-2">Recent Runs</p>
        <div className="flex flex-col gap-2">
          {activities.slice(0, 5).map((activity) => (
            <RunCard key={activity.id} run={activity} />
          ))}
        </div>
      </div>
    </section>
  );
}
