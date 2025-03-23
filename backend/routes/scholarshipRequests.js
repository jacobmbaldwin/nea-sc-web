const express = require('express');
const router = express.Router();
const ScholarshipRequest = require('../models/scholarshipRequest');

// Getting All
router.get('/', async (req, res) => {
    try {
        const scholarshipRequests = await ScholarshipRequest.find();
        res.json(scholarshipRequests);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Getting One
router.get('/:id', getScholarshipRequest, (req, res) => {
    res.send(res.scholarshipRequest);
});

//Creating One
router.post('/', async (req, res) => {
    const scholarshipRequest = new ScholarshipRequest({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthDate: req.body.birthDate,
        gender: req.body.gender,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        email: req.body.email,
        phone: req.body.phone,
        parentName: req.body.parentName,
        timePlayed: req.body.timePlayed,
        clubHistory: req.body.clubHistory,
        positionsPlayed: req.body.positionsPlayed,
        tournamentHistory: req.body.tournamentHistory,
        whySoccer: req.body.whySoccer,
        householdIncome: req.body.householdIncome,
        householdSize: req.body.householdSize,
        financialChallenges: req.body.financialChallenges
    });

    try {
        const newScholarshipRequest = await scholarshipRequest.save();
        res.status(201).json(scholarshipRequest);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

async function getScholarshipRequest(req, res, next) {
    let scholarshipRequest;
    try {
        scholarshipRequest = await ScholarshipRequest.findById(req.params.id);
        if (scholarshipRequest == null) {
            return res.status(404).json({ message: 'Cannot find scholarship request' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.scholarshipRequest = scholarshipRequest;
    next();
}

module.exports = router;