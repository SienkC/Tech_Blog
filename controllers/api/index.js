const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

// send to userRoutes file when /users is in url
router.use('/users', userRoutes);

// send to postRoutes file when /posts is in url
router.use('/posts', postRoutes);

router.use('/comments', commentRoutes);

module.exports = router;