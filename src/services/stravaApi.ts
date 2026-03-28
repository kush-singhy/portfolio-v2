import type { StravaActivity, StravaActivityDetail } from '@/components/RunCard';

const CACHE_TTL = 12 * 60 * 60 * 1000; // 12 hours

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

function getCache<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;

    const entry: CacheEntry<T> = JSON.parse(raw);
    if (Date.now() - entry.timestamp > CACHE_TTL) {
      localStorage.removeItem(key);
      return null;
    }

    return entry.data;
  } catch {
    return null;
  }
}

function setCache<T>(key: string, data: T): void {
  try {
    const entry: CacheEntry<T> = { data, timestamp: Date.now() };
    localStorage.setItem(key, JSON.stringify(entry));
  } catch {
    // localStorage full or unavailable — ignore
  }
}

let cachedToken: string | null = null;

async function getAccessToken(): Promise<string> {
  if (cachedToken) return cachedToken;

  const response = await fetch('https://www.strava.com/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: import.meta.env.VITE_STRAVA_CLIENT_ID,
      client_secret: import.meta.env.VITE_STRAVA_CLIENT_SECRET,
      refresh_token: import.meta.env.VITE_STRAVA_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to refresh Strava access token');
  }

  const data = await response.json();
  cachedToken = data.access_token;
  return cachedToken;
}

export async function getStravaActivities(): Promise<StravaActivity[]> {
  const cached = getCache<StravaActivity[]>('strava_runs');
  if (cached) return cached;

  const accessToken = await getAccessToken();
  const allActivities: StravaActivity[] = [];
  let page = 1;

  while (true) {
    const response = await fetch(
      `https://www.strava.com/api/v3/athlete/activities?per_page=200&page=${page}&access_token=${accessToken}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch Strava activities');
    }

    const activities: StravaActivity[] = await response.json();
    if (activities.length === 0) break;

    allActivities.push(...activities);
    if (activities.length < 200) break;
    page++;
  }

  const runs = allActivities.filter((a) => a.type === 'Run');
  setCache('strava_runs', runs);
  return runs;
}

export async function getActivityDetail(id: number): Promise<StravaActivityDetail> {
  const cacheKey = `strava_detail_${id}`;
  const cached = getCache<StravaActivityDetail>(cacheKey);
  if (cached) return cached;

  const accessToken = await getAccessToken();

  const response = await fetch(
    `https://www.strava.com/api/v3/activities/${id}?access_token=${accessToken}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch activity ${id}`);
  }

  const detail: StravaActivityDetail = await response.json();
  setCache(cacheKey, detail);
  return detail;
}
