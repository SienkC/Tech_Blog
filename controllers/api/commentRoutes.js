const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
    try {
        // create new post with given title and text
        const commentData = await Comment.create({
            text: req.body.text,
            user_id: req.session.user,
            post_id: req.body.postId
        });
    
        res.status(200).json(commentData);
    } 
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;