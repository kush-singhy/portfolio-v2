import type { VercelRequest, VercelResponse } from '@vercel/node';

interface TokenResponse {
  access_token: string;
}

async function getAccessToken(): Promise<string> {
  const response = await fetch('https://www.strava.com/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      refresh_token: process.env.STRAVA_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to refresh Strava access token');
  }

  const data: TokenResponse = await response.json();
  return data.access_token;
}

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  try {
    const accessToken = await getAccessToken();

    const response = await fetch(
      `https://www.strava.com/api/v3/athlete/activities?per_page=100&access_token=${accessToken}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch Strava activities');
    }

    const activities = await response.json();
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    res.status(200).json(activities);
  } catch (error) {
    console.error('Strava API error:', error);
    res.status(500).json({ error: 'Failed to fetch activities' });
  }
}
