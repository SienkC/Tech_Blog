const router = require('express').Router();
const { BlogPost, Comment, User } = require('../models');
const Authenticate = require('../utils/authenticate');

// Show all posts on homepage
router.get('/', async (req, res) => {
    try {
        const dbPostData = await BlogPost.findAll({
            include: [
                {
                    model: User,
                    attributes: { exclude: ['password']}
                }
            ]
        });

        // get each post from the data
        const posts = dbPostData.map((post) =>
            post.get({ plain: true })
        );

        res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn,
        });
    } 
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET one post
router.get('/post/:id', Authenticate, async (req, res) => {
    try {
        const dbPostData = await BlogPost.findByPk(req.params.id, {
            include: [
            {
                model: Comment,
                attributes: [
                    'text',
                    'user_id',
                    'createdAt'
                ],
                // get comment user
                include: [
                    {
                        model: User,
                        attributes: [
                            'username'
                        ]
                    }
                ]
            },
            {
                model: User,
                attributes: [
                    'username'
                ],
            },
            ],
        });
        const post = dbPostData.get({ plain: true });
        console.log(post.comments[0].user.username);
        res.render('post', { post, loggedIn: req.session.loggedIn });
    } 
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// access user dashboard
router.get('/dashboard', Authenticate, async (req, res) => {
    // show only posts and comments from user
    try {
        const dbPostData = await BlogPost.findAll(
            {
                // only get posts for current user
                where: { user_id: req.session.user } 
            },
            {
            include: [
                {
                    model: User,
                    attributes: { exclude: ['password']}
                }
            ]
        });
        // get each post from the data
        const posts = dbPostData.map((post) =>
            post.get({ plain: true })
        );
        res.render('dashboard', {
            posts,
            loggedIn: req.session.loggedIn,
        });
    } 
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // if user is logged in, take them to homepage
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    // if user is logged in, take them to homepage
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});

router.get('/newpost', Authenticate, (req, res) => {
    res.render('newpost');
});

module.exports = router;