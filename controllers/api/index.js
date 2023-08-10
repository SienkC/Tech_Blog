const router = require('express').Router();
const userRoutes = require('./userRoutes');

// send to userRoutes file when /users is in url
router.use('/users', userRoutes);

module.exports = router;