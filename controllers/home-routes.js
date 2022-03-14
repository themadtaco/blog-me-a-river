const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// render homepage with posts
router.get('/', (req, res) => {
    res.render('homepage');
});

module.exports = router;