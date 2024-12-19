const dotenv = require('dotenv');
dotenv.config();

const client_id = process.env.spotifyClientId;
const client_secret = process.env.spotifyClientSecret;
//generates base64 encoded key for postman test
const encodedCredentials = Buffer.from(
  `${client_id}:${client_secret}`
).toString('base64');
// console.log('Basic ' + encodedCredentials);

let cachedToken = '';
let tokenExpiresAt = 0;

//function to exchange client id and secret for token
const getToken = async () => {
  console.log(encodedCredentials);
  try {
    const result = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded', // both header specified in spotify dev code-flow doc
        Authorization: 'Basic ' + encodedCredentials,
      },
      body: 'grant_type=client_credentials',
    });

    if (!result.ok) {
      throw new Error(`Error fetching token: ${result.statusText}`); //status text is built property of response object
    }

    const data = await result.json();

    if (!data.access_token || !data.expires_in) {
      //handles errors if response object is invalid
      throw new Error('Invalid token response from Spotify API');
    }

    cachedToken = data.access_token; //caches access token from response object
    console.log(cachedToken);

    tokenExpiresAt = Date.now() + data.expires_in * 1000;
    // sets expiration time to current time plus expiration time from response object converted to milliseconds

    console.log('New access token fetched:', cachedToken);

    return data.access_token;
  } catch (error) {
    console.error('Error:', error.message);
    console.log('Error fetching token:', cachedToken);
  }
};

const getValidAccessToken = async () => {
  const currentTime = Date.now();

  console.log(
    `checking token validity: cached: ${cachedToken} expires at: ${tokenExpiresAt} time: ${currentTime})}`
  );

  if (cachedToken && currentTime < tokenExpiresAt) {
    console.log('Cached Token Still Valid');
    return cachedToken; // if valid returns cached token
  }
  return await getToken(encodedCredentials); //otherwise calls get token
};

// Search function
// add refresh token logic later for auth code flow
const fetchTrack = async (req, res, next) => {
  const { song } = req.params;
  try {
    const accessToken = await getValidAccessToken(tokenExpiresAt, cachedToken);
    console.log(song);
    const trackResult = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(
        song
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
    const filteredData = trackData.tracks.items;
    // console.log(`This is filtered data: ${filteredData}`);

    res.locals.apiData = filteredData;
    return next();
    // console.log('This is the res.locals object:', res.locals);
    // console.log('This is the res.locals.apiData object:', res.locals.apiData);
    // console.log(`Search Results:`, trackData);
  } catch (error) {
    console.error('Error in Fetch Track Middleware:', error.message);
    return res.status(500).json({ error: error.message });
  }
};

// //function to check if refresh token is expired
// //to be implimented later if auth code flow is used
// const isTokenExpired = () => {};
// //function to refresh token
// const refreshToken = async () => {
//   try {
//     const body = await fetch('https://accounts.spotify.com/api/token', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: new URLSearchParams({
//         grant_type: 'refresh_token',
//         refresh_token: refreshToken,
//         client_id: clientId,
//       }),
//     });
//     if (!body.ok) {
//       throw new Error(`Error fetching refresh token:${body.statusText}`); //status text is built property of response object
//     }
//     const response = await body.json();
//     return response.access_token;
//   } catch (error) {
//     console.error('Error:', error.message); //error.message is built in property of error object
//   }
// };

module.exports = { fetchTrack };
