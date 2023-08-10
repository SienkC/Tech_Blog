const { User } = require('../models');

const userdata = [
    {
        username: 'Test',
        password: 'testtest',
    },
    {
        username: 'Test2',
        password: 'testtest2',
    },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
