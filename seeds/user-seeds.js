const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {
        username: 'jonsnow',
        password: 'password123'
    },
    {
        username: 'taco',
        password: 'password123'
    },
    {
        username: 'conana',
        password: 'password123'
    },
    {
        username: 'bigbrickster',
        password: 'password123'
    },
    {
        username: 'robbielong',
        password: 'password123'
    },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;