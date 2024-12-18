const Song = require('./models');

const controller = {
  addSong(req, res, next) {
    const { song, artist, album, albumImageUrl, duration, releaseDate } =
      req.body;

    //check if any of the required properties are missing
    if (
      !song ||
      !artist ||
      !album ||
      !albumImageUrl ||
      !duration ||
      !releaseDate
    ) {
      return next({
        log: 'Malformed request received',
        status: 400,
        message: { err: 'Request is missing a field' },
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

  api(req, res, next) {},

  getSongs(req, res, next) {
    Song.find({}, { _id: 0, __v: 0 })
      .then((songs) => {
        res.locals.getSongs = songs;
        return next();
      })
      .catch((err) => {
        return next({
          log: `Error retrieving songs from the database: ${err}`,
          status: 500,
          message: { err: 'Failed to retrieve songs from the database' },
        });
      });
  },

  deleteSong(req, res, next) {
    const { song } = req.params;
    // console.log('This is the req obj from the deleteSong middleware', req);
    Song.deleteOne({ song })
      .then((res) => {
        // console.log('This is the res obj from the deleteSong middleware', res);
        if (res.acknowledged === true && res.deletedCount > 0) {
          return next();
        } else {
          return next({
            log: 'Unable to find song in the database',
            status: 404,
            message: { err: 'Failed to find song in the database' },
          });
        }
      })
      .catch((err) => {
        return next({
          log: `Error deleting song from the database: ${err}`,
          status: 500,
          message: { err: 'Failed to delete song from the database' },
        });
      });
  },
};

module.exports = controller;
