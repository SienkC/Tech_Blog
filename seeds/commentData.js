const { Comment } = require('../models');

const commentdata = [
    {
        text: 'test text',
        user_id: 1,
        post_id: 1
    },
    {
        text: 'test2 text',
        user_id: 2,
        post_id: 2
    },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;