const mongoose = require('mongoose'); 

const songSchema = mongoose.Schema({
    song: { type: String, required: true, unique: false}, 
    artist: { type: String, required: true, unique: false}, 
    album: { type: String, required: true, unique: false }, 
    albumImageUrl: { type: String, required: true, unique: true },
    duration: { type: Number, required: true, unique: false },
    releaseDate: { type: String, required: true, unique: false }
}); 

module.exports = mongoose.model('Song', songSchema); 


// const song = {
//     "tracks": {
//       "href": "https://api.spotify.com/v1/search?offset=0&limit=1&query=apocalypse&type=track&include_external=audio&locale=en-US,en;q%3D0.9",
//       "limit": 1,
//       "next": "https://api.spotify.com/v1/search?offset=1&limit=1&query=apocalypse&type=track&include_external=audio&locale=en-US,en;q%3D0.9",
//       "offset": 0,
//       "previous": null,
//       "total": 900,
//       "items": [
//         {
//           "album": {
//             "album_type": "album",
//             "artists": [
//               {
//                 "name": "Beyoncé",
//               }
//             ],
//             "images": [
//               {
//                 "height": 640,
//                 "width": 640,
//                 "url": "https://i.scdn.co/image/ab67616d0000b273801c4d205accdba0a468a10b"
//               },
//               {
//                 "height": 300,
//                 "width": 300,
//                 "url": "https://i.scdn.co/image/ab67616d00001e02801c4d205accdba0a468a10b"
//               },
//               {
//                 "height": 64,
//                 "width": 64,
//                 "url": "https://i.scdn.co/image/ab67616d00004851801c4d205accdba0a468a10b"
//               }
//             ],
//             "name": "I AM...SASHA FIERCE",
//             "release_date": "2008-11-17",
//           },
//           "artists": [
//             {
//               "name": "Beyoncé",
//             }
//           ],
//           "duration_ms": 200613,
//           "name": "Diva",
//         }
//       ]
//     }
//   }; 

// let songItem = song.tracks.items[0]; 
// console.log(songItem); 

// let albumName = songItem.album.name; 
// console.log(albumName); 

// let artistName = songItem.artists[0].name; 
// console.log(artistName); 

// let songName = songItem.name; 
// console.log(songName); 

// let duration = songItem.duration_ms; 
// console.log(duration); 

// let releaseDate = songItem.album.release_date; 
// console.log(releaseDate); 

// let albumImage = songItem.album.images[0].url; 
// console.log(albumImage); 

        // {
        //   "album": {
        //     "album_type": "album",
        //     "artists": [
        //       {
        //         "name": "Beyoncé",
        //       }
        //     ],
        //     "images": [
        //       {
        //         "height": 640,
        //         "width": 640,
        //         "url": "https://i.scdn.co/image/ab67616d0000b273801c4d205accdba0a468a10b"
        //       },
        //       {
        //         "height": 300,
        //         "width": 300,
        //         "url": "https://i.scdn.co/image/ab67616d00001e02801c4d205accdba0a468a10b"
        //       },
        //       {
        //         "height": 64,
        //         "width": 64,
        //         "url": "https://i.scdn.co/image/ab67616d00004851801c4d205accdba0a468a10b"
        //       }
        //     ],
        //     "name": "I AM...SASHA FIERCE",
        //     "release_date": "2008-11-17",
        //   },
        //   "artists": [
        //     {
        //       "name": "Beyoncé",
        //     }
        //   ],
        //   "duration_ms": 200613,
        //   "name": "Diva",
        // }

        // {
        //     "tracks": {
        //       "href": "https://api.spotify.com/v1/search?offset=0&limit=2&query=sticky&type=track&include_external=audio&locale=en-US,en;q%3D0.9",
        //       "limit": 2,
        //       "next": "https://api.spotify.com/v1/search?offset=2&limit=2&query=sticky&type=track&include_external=audio&locale=en-US,en;q%3D0.9",
        //       "offset": 0,
        //       "previous": null,
        //       "total": 900,
        //       "items": [
        //         {
        //           "album": {
        //             "album_type": "album",
        //             "artists": [
        //               {
        //                 "external_urls": {
        //                   "spotify": "https://open.spotify.com/artist/4V8LLVI7PbaPR0K2TGSxFF"
        //                 },
        //                 "href": "https://api.spotify.com/v1/artists/4V8LLVI7PbaPR0K2TGSxFF",
        //                 "id": "4V8LLVI7PbaPR0K2TGSxFF",
        //                 "name": "Tyler, The Creator",
        //                 "type": "artist",
        //                 "uri": "spotify:artist:4V8LLVI7PbaPR0K2TGSxFF"
        //               }
        //             ],
        //             "external_urls": {
        //               "spotify": "https://open.spotify.com/album/0U28P0QVB1QRxpqp5IHOlH"
        //             },
        //             "href": "https://api.spotify.com/v1/albums/0U28P0QVB1QRxpqp5IHOlH",
        //             "id": "0U28P0QVB1QRxpqp5IHOlH",
        //             "images": [
        //               {
        //                 "height": 640,
        //                 "width": 640,
        //                 "url": "https://i.scdn.co/image/ab67616d0000b273124e9249fada4ff3c3a0739c"
        //               },
        //               {
        //                 "height": 300,
        //                 "width": 300,
        //                 "url": "https://i.scdn.co/image/ab67616d00001e02124e9249fada4ff3c3a0739c"
        //               },
        //               {
        //                 "height": 64,
        //                 "width": 64,
        //                 "url": "https://i.scdn.co/image/ab67616d00004851124e9249fada4ff3c3a0739c"
        //               }
        //             ],
        //             "is_playable": true,
        //             "name": "CHROMAKOPIA",
        //             "release_date": "2024-10-28",
        //             "release_date_precision": "day",
        //             "total_tracks": 14,
        //             "type": "album",
        //             "uri": "spotify:album:0U28P0QVB1QRxpqp5IHOlH"
        //           },
        //           "artists": [
        //             {
        //               "external_urls": {
        //                 "spotify": "https://open.spotify.com/artist/4V8LLVI7PbaPR0K2TGSxFF"
        //               },
        //               "href": "https://api.spotify.com/v1/artists/4V8LLVI7PbaPR0K2TGSxFF",
        //               "id": "4V8LLVI7PbaPR0K2TGSxFF",
        //               "name": "Tyler, The Creator",
        //               "type": "artist",
        //               "uri": "spotify:artist:4V8LLVI7PbaPR0K2TGSxFF"
        //             },
        //             {
        //               "external_urls": {
        //                 "spotify": "https://open.spotify.com/artist/2qoQgPAilErOKCwE2Y8wOG"
        //               },
        //               "href": "https://api.spotify.com/v1/artists/2qoQgPAilErOKCwE2Y8wOG",
        //               "id": "2qoQgPAilErOKCwE2Y8wOG",
        //               "name": "GloRilla",
        //               "type": "artist",
        //               "uri": "spotify:artist:2qoQgPAilErOKCwE2Y8wOG"
        //             },
        //             {
        //               "external_urls": {
        //                 "spotify": "https://open.spotify.com/artist/3DbwFQlvLxRSi2uX8mf81A"
        //               },
        //               "href": "https://api.spotify.com/v1/artists/3DbwFQlvLxRSi2uX8mf81A",
        //               "id": "3DbwFQlvLxRSi2uX8mf81A",
        //               "name": "Sexyy Red",
        //               "type": "artist",
        //               "uri": "spotify:artist:3DbwFQlvLxRSi2uX8mf81A"
        //             },
        //             {
        //               "external_urls": {
        //                 "spotify": "https://open.spotify.com/artist/55Aa2cqylxrFIXC767Z865"
        //               },
        //               "href": "https://api.spotify.com/v1/artists/55Aa2cqylxrFIXC767Z865",
        //               "id": "55Aa2cqylxrFIXC767Z865",
        //               "name": "Lil Wayne",
        //               "type": "artist",
        //               "uri": "spotify:artist:55Aa2cqylxrFIXC767Z865"
        //             }
        //           ],
        //           "disc_number": 1,
        //           "duration_ms": 255915,
        //           "explicit": true,
        //           "external_ids": {
        //             "isrc": "USQX92405790"
        //           },
        //           "external_urls": {
        //             "spotify": "https://open.spotify.com/track/3tFed7YsjGnIfxeLEQwx3R"
        //           },
        //           "href": "https://api.spotify.com/v1/tracks/3tFed7YsjGnIfxeLEQwx3R",
        //           "id": "3tFed7YsjGnIfxeLEQwx3R",
        //           "is_local": false,
        //           "is_playable": true,
        //           "name": "Sticky (feat. GloRilla, Sexyy Red & Lil Wayne)",
        //           "popularity": 89,
        //           "preview_url": null,
        //           "track_number": 8,
        //           "type": "track",
        //           "uri": "spotify:track:3tFed7YsjGnIfxeLEQwx3R"
        //         },
        //         {
        //           "album": {
        //             "album_type": "album",
        //             "artists": [
        //               {
        //                 "external_urls": {
        //                   "spotify": "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"
        //                 },
        //                 "href": "https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4",
        //                 "id": "3TVXtAsR1Inumwj472S9r4",
        //                 "name": "Drake",
        //                 "type": "artist",
        //                 "uri": "spotify:artist:3TVXtAsR1Inumwj472S9r4"
        //               }
        //             ],
        //             "external_urls": {
        //               "spotify": "https://open.spotify.com/album/3cf4iSSKd8ffTncbtKljXw"
        //             },
        //             "href": "https://api.spotify.com/v1/albums/3cf4iSSKd8ffTncbtKljXw",
        //             "id": "3cf4iSSKd8ffTncbtKljXw",
        //             "images": [
        //               {
        //                 "height": 640,
        //                 "width": 640,
        //                 "url": "https://i.scdn.co/image/ab67616d0000b2738dc0d801766a5aa6a33cbe37"
        //               },
        //               {
        //                 "height": 300,
        //                 "width": 300,
        //                 "url": "https://i.scdn.co/image/ab67616d00001e028dc0d801766a5aa6a33cbe37"
        //               },
        //               {
        //                 "height": 64,
        //                 "width": 64,
        //                 "url": "https://i.scdn.co/image/ab67616d000048518dc0d801766a5aa6a33cbe37"
        //               }
        //             ],
        //             "is_playable": true,
        //             "name": "Honestly, Nevermind",
        //             "release_date": "2022-06-17",
        //             "release_date_precision": "day",
        //             "total_tracks": 14,
        //             "type": "album",
        //             "uri": "spotify:album:3cf4iSSKd8ffTncbtKljXw"
        //           },
        //           "artists": [
        //             {
        //               "external_urls": {
        //                 "spotify": "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"
        //               },
        //               "href": "https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4",
        //               "id": "3TVXtAsR1Inumwj472S9r4",
        //               "name": "Drake",
        //               "type": "artist",
        //               "uri": "spotify:artist:3TVXtAsR1Inumwj472S9r4"
        //             }
        //           ],
        //           "disc_number": 1,
        //           "duration_ms": 243227,
        //           "explicit": true,
        //           "external_ids": {
        //             "isrc": "USUG12204888"
        //           },
        //           "external_urls": {
        //             "spotify": "https://open.spotify.com/track/4rmVZajAF7PkrCagGPHbqa"
        //           },
        //           "href": "https://api.spotify.com/v1/tracks/4rmVZajAF7PkrCagGPHbqa",
        //           "id": "4rmVZajAF7PkrCagGPHbqa",
        //           "is_local": false,
        //           "is_playable": true,
        //           "name": "Sticky",
        //           "popularity": 68,
        //           "preview_url": null,
        //           "track_number": 7,
        //           "type": "track",
        //           "uri": "spotify:track:4rmVZajAF7PkrCagGPHbqa"
        //         }
        //       ]
        //     }
        //   }