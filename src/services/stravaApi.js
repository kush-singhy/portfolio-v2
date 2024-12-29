import axios from 'axios';

export async function getNewAccessToken() {
  try {
    const response = await axios.post('https://www.strava.com/oauth/token', {
      client_id: import.meta.env.VITE_STRAVA_CLIENT_ID,
      client_secret: import.meta.env.VITE_STRAVA_CLIENT_SECRET,
      refresh_token: import.meta.env.VITE_STRAVA_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    });
    return response.data.access_token;
  } catch (error) {
    console.error('Error refreshing access token:', error);
    throw error;
  }
}

export async function getStravaActivities() {
  try {
    const accessToken = await getNewAccessToken();
    const url = 'https://www.strava.com/api/v3/athlete/activities';
    const perPage = 100;

    const response = await axios.get(
      `${url}?per_page=${perPage}&access_token=${accessToken}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching Strava activities:', error);
    return [];
  }
}
