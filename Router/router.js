const express = require('express');
const { getMoviesData } = require('../Controller/getMovies');
const { searchMovies } = require('../Controller/searchMovies');
const router = express.Router()


router.get('/getmovies', getMoviesData);
router.get('/searchmovies', searchMovies);

module.exports = { router };