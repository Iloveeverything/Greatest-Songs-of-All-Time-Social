const Song = require('./models'); 

// const songSchema = mongoose.Schema({
//     song: { type: String, required: true, unique: false}, 
//     artist: { type: String, required: true, unique: true}, 
//     album: { type: String, required: true, unique: false }, 
//     albumImageUrl: { type: String, required: true, unique: true },
//     duration: { type: Number, required: true, unique: false },
//     releaseDate: { type: String, required: true, unique: false }
// }); 

const controller = {

    addSong(req, res, next) {
        const { song, artist, album, albumImageUrl, duration, releaseDate } = req.body; 

        //check if any of the required properties are missing 
        if(!song || !artist || !album || !albumImageUrl || !duration || !releaseDate) {
            return next({
                log: 'Malformed request received', 
                status: 400, 
                message: { err: 'Request is missing a field'}, 
            }); 
        }

        Song.create({ song, artist, album, albumImageUrl, duration, releaseDate })
          .then((song) => {
            res.locals.newSong = song; 
            return next(); 
          })
          .catch((err) => {
            console.log('This is the err obj from the addSong middleware', err); 
            return next({
                log: `Error adding song to the database: ${err}`, 
                status: 500, 
                message: { err: 'Failed to add song to the database' }, 
            }); 
          }); 
    }, 

    api(req, res, next) {

    }, 

    getSongs(req, res, next) {

    }, 

    deleteSong(req, res, next) {

    }, 

}; 

module.exports = controller; 