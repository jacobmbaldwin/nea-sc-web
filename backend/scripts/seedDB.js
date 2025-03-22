const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:3000'
);

const userSeed = [
    {
        name: 'John Doe',
        email: 'asdf@nerd.com',
        password: 'password123'
    },

];

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + ' records inserted!');
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

    