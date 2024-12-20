const express = require('express');
const controller = require('./controller');
const { fetchTrack } = require('./api');

// instantiate a router for the /playlist route
const router = express.Router();

// POST method route handler to add song to DB
router.post('/', controller.addSong, (req, res) =>
  res.status(201).json(res.locals.newSong)
);

// GET method route handler to get song data from the Spotify API
router.get('/:song', fetchTrack, (req, res) =>
  res.status(200).json({ songs: res.locals.apiData })
);

// GET method route handler to get all songs in the DB
router.get('/', controller.getSongs, (req, res) =>
  res.status(200).json({ songs: res.locals.getSongs })
);

// DELETE method route handler to delete a song from the DB
router.delete('/:song', controller.deleteSong, (req, res) =>
  res.sendStatus(204)
);

module.exports = router;

