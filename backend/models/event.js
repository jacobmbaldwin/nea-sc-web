const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    title : {
        type: String,
        required: true
    },
    description: {
        type: String || null,
        required: false
    },
    location: {
        type: String,
        required: true
    },
    time: {
        type: String || null,
        required: false
    },
});

module.exports = mongoose.model('Event', eventSchema);