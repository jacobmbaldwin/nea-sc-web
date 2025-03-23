const mongoose = require('mongoose');

const scholarshipRequestSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    parentName: {
        type: String,
        required: true
    },
    timePlayed: {
        type: String,
        required: true
    },
    clubHistory: {
        type: String,
        required: true
    },
    positionsPlayed: {
        type: String,
        required: true
    },
    tournamentHistory: {
        type: String,
        required: true
    },
    whySoccer: {
        type: String,
        required: true
    },
    householdIncome: {
        type: Number,
        required: true
    },
    householdSize: {
        type: Number,
        required: true
    },
    financialChallenges: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('ScholarshipRequest', scholarshipRequestSchema);