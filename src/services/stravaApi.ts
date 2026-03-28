import type { StravaActivity } from '@/components/RunCard';

async function getAccessToken(): Promise<string> {
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
  return data.access_token;
}

export async function getStravaActivities(): Promise<StravaActivity[]> {
  const accessToken = await getAccessToken();

  const response = await fetch(
    `https://www.strava.com/api/v3/athlete/activities?per_page=100&access_token=${accessToken}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch Strava activities');
  }

  return response.json();
}
