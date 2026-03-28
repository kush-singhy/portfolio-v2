import { useState, useEffect } from 'react';
import { getStravaActivities, getActivityDetail } from '@/services/stravaApi';
import RunCard from '@/components/RunCard';
import type { StravaActivity, StravaBestEffort } from '@/components/RunCard';
import Title from '@/components/Title';
import { sectionConfig } from '@/data/sectionConfig';
import { formatTime } from '@/utils/formatUtils';

const config = sectionConfig.runs;

const RACE_DISTANCES = [
  { key: '5k', label: '5K', strava: '5k', meters: 5000 },
  { key: '10k', label: '10K', strava: '10k', meters: 10000 },
  { key: 'half', label: 'Half Marathon', strava: 'Half-Marathon', meters: 21097 },
  { key: 'marathon', label: 'Marathon', strava: 'Marathon', meters: 42195 },
] as const;

interface BestEffortResult {
  label: string;
  time: number;
  activity: StravaActivity;
}

function findCandidates(
  runs: StravaActivity[],
  targetDistance: number,
): StravaActivity[] {
  const eligible = runs.filter((r) => r.distance >= targetDistance);

  // Top 3 by fastest overall pace
  const byPace = [...eligible]
    .sort((a, b) => a.moving_time / a.distance - b.moving_time / b.distance)
    .slice(0, 3);

  // Top 3 closest to target distance (likely targeted race efforts)
  const byProximity = [...eligible]
    .sort((a, b) => Math.abs(a.distance - targetDistance) - Math.abs(b.distance - targetDistance))
    .slice(0, 3);

  // Deduplicate
  const seen = new Set<number>();
  const result: StravaActivity[] = [];
  for (const r of [...byPace, ...byProximity]) {
    if (!seen.has(r.id)) {
      seen.add(r.id);
      result.push(r);
    }
  }
  return result;
}

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

function BestEffortCard({ effort }: { effort: BestEffortResult }) {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between px-5 py-4 gap-3">
      <div className="flex gap-4 md:flex-col md:gap-0">
        <p className="font-medium truncate max-w-40 md:max-w-64">
          {effort.activity.name}
        </p>
        <p className="ml-auto text-gray-500 md:ml-0 text-sm">
          {effort.label} best effort
        </p>
      </div>
      <div>
        <p className="text-gray-500">Time</p>
        <p>{formatTime(effort.time)}</p>
      </div>
    </div>
  );
}

export default function Runs() {
  const [activities, setActivities] = useState<StravaActivity[]>([]);
  const [bestEfforts, setBestEfforts] = useState<Record<string, BestEffortResult | null>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const runs = await getStravaActivities();
        setActivities(runs);

        // Collect unique candidate activity IDs across all distances
        const candidateMap = new Map<number, StravaActivity>();
        for (const dist of RACE_DISTANCES) {
          const candidates = findCandidates(runs, dist.meters);
          for (const c of candidates) {
            candidateMap.set(c.id, c);
          }
        }

        // Fetch details for all candidates
        const details = await Promise.all(
          Array.from(candidateMap.keys()).map((id) =>
            getActivityDetail(id).catch(() => null)
          )
        );

        const detailMap = new Map(
          details
            .filter((d) => d !== null)
            .map((d) => [d.id, d])
        );

        // Find the best effort for each distance
        const results: Record<string, BestEffortResult | null> = {};
        for (const dist of RACE_DISTANCES) {
          let best: BestEffortResult | null = null;

          for (const [id, detail] of detailMap) {
            const effort = detail.best_efforts?.find(
              (e: StravaBestEffort) => e.name.toLowerCase() === dist.strava.toLowerCase()
            );
            if (effort && (!best || effort.moving_time < best.time)) {
              best = {
                label: dist.label,
                time: effort.moving_time,
                activity: candidateMap.get(id)!,
              };
            }
          }

          results[dist.key] = best;
        }

        setBestEfforts(results);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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

  const recentRuns = activities.slice(0, 5);

  const bestEffortEntries = RACE_DISTANCES
    .map((dist) => ({ dist, effort: bestEfforts[dist.key] }))
    .filter((e) => e.effort !== null);

  return (
    <section id="runs" className="flex flex-col gap-4">
      <RunsTitle />

      {longestRun && (
        <RunGroup label="Longest Run">
          <RunCard run={longestRun} isLast />
        </RunGroup>
      )}

      {bestEffortEntries.length > 0 && (
        <RunGroup label="Personal Bests">
          {bestEffortEntries.map(({ dist, effort }, index) => (
            <div key={dist.key}>
              <BestEffortCard effort={effort!} />
              {index < bestEffortEntries.length - 1 && (
                <div className="w-[95%] mx-auto border-b border-gray-400" />
              )}
            </div>
          ))}
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
