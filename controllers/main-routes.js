const router = require('express').Router();
const { BlogPost, Comment, User } = require('../models');

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
router.get('/post/:id', async (req, res) => {
    // If the user is not logged in, redirect the user to the login page
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } 
    else {
        // If the user is logged in, allow them to view the post
        try {
            const dbPostData = await BlogPost.findByPk(req.params.id, {
                include: [
                {
                    model: Comment,
                    attributes: [
                        'id',
                        'text',
                        'userId'
                    ],
                },
                ],
            });
            const post = dbPostData.get({ plain: true });
            res.render('post', { post, loggedIn: req.session.loggedIn });
        } 
        catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;