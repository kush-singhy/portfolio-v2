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

  if (loading) {
    return (
      <section id="runs" className="flex flex-col gap-4">
        <div className="relative">
          <div className="flex items-center gap-5">
            <p className="relative z-10 text-2xl font-bold">Runs</p>
            <p className="text-gray-500 text-sm">(powered by Strava API)</p>
          </div>
          <span className="absolute bg-[#ABE2CB] w-[60px] h-[15px] bottom-0 -left-1 rotate-2" />
        </div>
        <p className="text-gray-500">Loading...</p>
      </section>
    );
  }

  if (error) return <div>Error loading activities: {error}</div>;

  // Find longest run
  const longestRun = activities.reduce(
    (max, activity) =>
      activity.distance > (max?.distance || 0) ? activity : max,
    null
  );

  // Find fastest 5km run
  const fastest5kRun = activities
    .filter((activity) => {
      // Convert meters to kilometers (5000m - 5500m range)
      const distanceInKm = activity.distance / 1000;
      return distanceInKm >= 5 && distanceInKm <= 5.5;
    })
    .reduce((fastest, activity) => {
      if (!fastest) return activity;
      return activity.moving_time < fastest.moving_time ? activity : fastest;
    }, null);

  return (
    <section id="runs" className="flex flex-col gap-4">
      <div className="relative">
        <div className="flex items-center gap-5">
          <p className="relative z-10 text-3xl font-semibold">Runs</p>
          <p className="text-gray-500 text-sm">(powered by Strava API)</p>
        </div>
        <span className="absolute bg-[#ABE2CB] w-[72px] h-[18px] bottom-0 -left-1 rotate-2" />
      </div>

      <div>
        <p className="text-lg font-semibold mb-2">Longest Run</p>

        {longestRun && (
          <div className="border-2 bg-[#F3F4F6] border-[#E7E8E9] rounded-xl">
            <RunCard run={longestRun} isLast={true} />
          </div>
        )}
      </div>

      <div>
        <p className="text-lg font-semibold mb-2">Fastest 5K</p>
        {fastest5kRun && (
          <div className="border-2 bg-[#F3F4F6] border-[#E7E8E9] rounded-xl">
            <RunCard run={fastest5kRun} isLast={true} />
          </div>
        )}
      </div>

      <div>
        <p className="text-lg font-semibold mb-2">Recent Runs</p>
        <div className="flex flex-col gap-2">
          <div className="border-2 bg-[#F3F4F6] border-[#E7E8E9] rounded-xl">
            {activities.slice(0, 5).map((activity, index) => (
              <RunCard
                key={activity.id}
                run={activity}
                isLast={index === activities.slice(0, 5).length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
