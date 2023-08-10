const sequelize = require('../config/connection');
// Adding in fake posts to test
const seedPost = require('./postData');
const seedUser = require('./userData');
const seedComment = require('./commentData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUser();

    await seedPost();

    await seedComment();

    process.exit(0);
};

seedAll();
