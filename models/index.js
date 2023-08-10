const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');

// Each post can have many comments
BlogPost.hasMany(Comment, {
    foreignKey: 'post_id'
});

Comment.belongsTo(BlogPost, {
    foreignKey: 'post_id'
});

// each user can have many posts
User.hasMany(BlogPost, {
    foreignKey: 'user_id'
});

BlogPost.belongsTo(User, {
    foreignKey: 'user_id'
});

// each user can have many comments
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, BlogPost, Comment };
