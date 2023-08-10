const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // references User
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        // references BlogPost
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        // get time stamps, so date created can be used
        timestamps: true,
        freezeTableName: false,
        underscored: true,
        modelName: 'comment',
    }
);

module.exports = Comment;
