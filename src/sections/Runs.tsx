import { useState, useEffect } from 'react';
import { getStravaActivities } from '@/services/stravaApi';
import RunCard from '@/components/RunCard';
import type { StravaActivity } from '@/components/RunCard';
import Title from '@/components/Title';
import { sectionConfig } from '@/data/sectionConfig';

const config = sectionConfig.runs;

function RunsTitle() {
  return (
    <div className="flex items-center gap-5">
      <Title
        title={config.title}
        highlightColor={config.highlightColor}
        rotation={config.rotation}
        smWidth={config.smWidth}
        mdWidth={config.mdWidth}
      />
      <p className="text-gray-500 text-sm">(powered by Strava API)</p>
    </div>
  );
}

function RunGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-lg font-semibold mb-2">{label}</p>
      <div className="border-2 bg-surface border-surface-border rounded-xl">
        {children}
      </div>
    </div>
  );
}

export default function Runs() {
  const [activities, setActivities] = useState<StravaActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const data = await getStravaActivities();
        setActivities(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  if (loading) {
    return (
      <section id="runs" className="flex flex-col gap-4">
        <RunsTitle />
        <p className="text-gray-500">Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section id="runs" className="flex flex-col gap-4">
        <RunsTitle />
        <p className="text-red-500">Unable to load runs.</p>
      </section>
    );
  }

  const longestRun = activities.reduce<StravaActivity | null>(
    (max, activity) =>
      activity.distance > (max?.distance ?? 0) ? activity : max,
    null
  );

  const fastest5kRun = activities
    .filter((activity) => {
      const distanceInKm = activity.distance / 1000;
      return distanceInKm >= 5 && distanceInKm <= 5.5;
    })
    .reduce<StravaActivity | null>((fastest, activity) => {
      if (!fastest) return activity;
      return activity.moving_time < fastest.moving_time ? activity : fastest;
    }, null);

  const recentRuns = activities.slice(0, 5);

  return (
    <section id="runs" className="flex flex-col gap-4">
      <RunsTitle />

      {longestRun && (
        <RunGroup label="Longest Run">
          <RunCard run={longestRun} isLast />
        </RunGroup>
      )}

      {fastest5kRun && (
        <RunGroup label="Fastest 5K">
          <RunCard run={fastest5kRun} isLast />
        </RunGroup>
      )}

      <RunGroup label="Recent Runs">
        {recentRuns.map((activity, index) => (
          <RunCard
            key={activity.id}
            run={activity}
            isLast={index === recentRuns.length - 1}
          />
        ))}
      </RunGroup>
    </section>
  );
}
