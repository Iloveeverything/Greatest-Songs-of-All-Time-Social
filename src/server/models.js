const mongoose = require('mongoose'); 

const songSchema = mongoose.Schema({
    song: { type: String, required: true, unique: false}, 
    artist: { type: String, required: true, unique: true}, 
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
//             "album_type": "single",
//             "artists": [
//               {
//                 "name": "Cigarettes After Sex",
//               }
//             ],
//             "images": [
//               {
//                 "height": 640,
//                 "width": 640,
//                 "url": "https://i.scdn.co/image/ab67616d0000b273a7e0d084fefd0d156a2efa05"
//               },
//               {
//                 "height": 300,
//                 "width": 300,
//                 "url": "https://i.scdn.co/image/ab67616d00001e02a7e0d084fefd0d156a2efa05"
//               },
//               {
//                 "height": 64,
//                 "width": 64,
//                 "url": "https://i.scdn.co/image/ab67616d00004851a7e0d084fefd0d156a2efa05"
//               }
//             ],
//             "name": "Apocalypse",
//             "release_date": "2017-03-21",
//             "type": "album",
//           },
//           "artists": [
//             {
//               "name": "Cigarettes After Sex",
//             }
//           ],
//           "duration_ms": 290146,
//           "name": "Apocalypse",
//         }
//       ]
//     }
//   }; 

// let songItem = song.tracks.items[0]; 
// // console.log(songItem); 

// let albumName = songItem.album.name; 
// // console.log(albumName); 

// let artistName = songItem.artists[0].name; 
// // console.log(artistName); 

// let songName = songItem.name; 
// // console.log(songName); 

// let duration = songItem.duration_ms; 
// // console.log(duration); 

// let releaseDate = songItem.album.release_date; 
// // console.log(releaseDate); 

// let albumImage = songItem.album.images[0].url; 
// // console.log(albumImage); 

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