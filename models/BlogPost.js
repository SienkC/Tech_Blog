const { Model, DataTypes } = require('sequelize');

// for encrypting the password
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

BlogPost.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: false,
        underscored: true,
        modelName: 'blog-post',
    }
);

module.exports = BlogPost;
