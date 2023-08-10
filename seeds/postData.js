const { BlogPost } = require('../models');

const postdata = [
    {
        title: 'Test title',
        text: 'test text',
        user_id: 1
    },
    {
        title: 'Test2 title',
        text: 'test2 text',
        user_id: 2
    },
];

const seedPost = () => BlogPost.bulkCreate(postdata);

module.exports = seedPost;