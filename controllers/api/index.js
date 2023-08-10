const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');

// send to userRoutes file when /users is in url
router.use('/users', userRoutes);

// send to postRoutes file when /posts is in url
// router.use('/posts', postRoutes);

module.exports = router;