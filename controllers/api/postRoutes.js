const router = require('express').Router();
const { BlogPost } = require('../../models');

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
            req.session.user = userData.id;
            res.status(200).json(userData);
        });
    } 
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
