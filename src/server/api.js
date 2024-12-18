const clientId = 'a9bb68623a154b67971c720cd54c17f0';
const clientSecret = '812d3dc4c3e642388b4197e99a4c2451';

let accessToken = '';
let refreshToken = '',
let tokenExpiresAt = 0

//function to exchange client id and secret for token
const getToken = async () => {
  try {
    const result = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded', // both header specified in spotify dev code-flow doc
        Authorization:
          'Basic ' +
          new Buffer.from(client_id + ':' + client_secret).toString('base64'),
      },
      body: 'grant_type=client_credentials',
    });

    if (!result.ok) {
      throw new error(`Error fetching token: ${result.statusText}`); //status text is built property of response object
    }
    const data = await result.json();
    return data.access_token;
  } catch (error) {
    console.error('Error:', error.message);
    console.log('Access token fetched:', accessToken);
  }
};

//function to check if refresh token is expired
const isTokenExpired = () => {};
//function to refresh token
const refreshToken = async () => {
  try {
    const body = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        client_id: clientId,
      }),
    });
    if (!body.ok) {
      throw new Error(`Error fetching refresh token:${body.statusText}`); //status text is built property of response object
    }
    const response = await body.json();
    return response.access_token;
  } catch (error) {
    console.error('Error:', error.message); //error.message is built in property of error object
  }
};

//Search function with refresh token logic
const search = async (query) => {
  try {
    const trackResult = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(
        query
      )}&type=track&offset=0`,
      {
        method: 'GET',
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    if (!trackResult.ok) {
      throw new Error(`Error:${trackResult.statusText}`);
    }
    const trackData = await trackResult.json();
    console.log(`Search Results:`, trackData);
  } catch (error) {
    console.error('Error:', error.message);
  }
};
