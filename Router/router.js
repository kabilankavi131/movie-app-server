const express = require('express');
const { getMoviesData } = require('../Controller/getMovies');
const { searchMovies } = require('../Controller/searchMovies');
const router = express.Router()


router.get('/getmovies', getMoviesData);
router.get('/searchmovies', searchMovies);
router.get('/', (req, res) => {
    res.send('Welcome to the Movies API');
})

module.exports = { router };