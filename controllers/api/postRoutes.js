const router = require('express').Router();
const { BlogPost } = require('../../models');

router.post('/', async (req, res) => {
    try {
        // create new post with given title and text
        const postData = await BlogPost.create({
            title: req.body.title,
            text: req.body.text,
            user_id: req.session.user
        });
    
        res.status(200).json(postData);
    } 
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
