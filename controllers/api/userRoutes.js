const router = require('express').Router();
const { User } = require('../../models');

// call to check password from login.js
router.post('/login', async (req, res) => {
    try {
        // Grab user that matches the entered username
        const userData = await User.findOne({ where: { username: req.body.username } });

        // if user data is not found for given username
        if (!userData) {
            res.status(400).json({ message: 'Please enter a valid username' });
            return;
        }

        // call user method to validate the password
        const validPassword = await userData.validatePassword(req.body.password);

        // if password is not valid, send error
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password, please try again' });
        return;
        }

        // save current session for logged in user
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.loggedIn = true;
            
            res.json({ user: userData.username, message: 'You are now logged in!' });
        });

    } 
    catch (err) {
        res.status(400).json(err);
    }
});

// log out user
router.post('/logout', (req, res) => {
    // end currently logged in session
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } 
    else {
        res.status(404).end();
    }
});

// create user
router.post('/', async (req, res) => {
    try {
        // create new user with given username and password
        const userData = await User.create({
            username: req.body.username,
            password: req.body.password
        });
    
        // create a new session with created user
        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json(userData);
        });
    } 
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
