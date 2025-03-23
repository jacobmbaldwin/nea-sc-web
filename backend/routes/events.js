const express = require('express');
const router = express.Router();
const Event = require('../models/event');

// Getting Events (with optional month/year filtering)
router.get('/', async (req, res) => {
    const { month, year } = req.query;  // Get month and year from query params

    try {
        let events;

        if (month && year) {
            // If both month and year are provided, filter events by month and year
            events = await Event.find({
                month: Number(month),   // Ensure the month is a number
                year: Number(year)      // Ensure the year is a number
            });
        } else {
            // If no month or year is provided, return all events
            events = await Event.find();
        }

        res.json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// Getting One
router.get('/:id', getEvent, (req, res) => {
    res.send(res.event);
});

//Creating One
router.post('/', async (req, res) => {
    const event = new Event({
        date: req.body.date,
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
        time: req.body.time
    });

    try {
        const newEvent = await event.save();
        res.status(201).json(newEvent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Updating One
router.patch('/:id', getEvent, async (req, res) => {
    if (req.body.date != null) {
        res.event.date = req.body.date;
    }
    if (req.body.title != null) {
        res.event.title = req.body.title;
    }
    if (req.body.description != null) {
        res.event.description = req.body.description;
    }
    if (req.body.location != null) {
        res.event.location = req.body.location;
    }
    if (req.body.time != null) {
        res.event.time = req.body.time;
    }
    try {
        const updatedEvent = await res.event.save();
        res.json(updatedEvent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Deleting One
router.delete('/:id', getEvent, async (req, res) => {
    try {
        await res.event.deleteOne();
        res.json({ message: 'Deleted Event' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getEvent(req, res, next) {
    let event;
    try {
        event = await Event.findById(req.params.id);
        if (event == null) {
            return res.status(404).json({ message: 'Cannot find event' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.event = event;
    next();
}

module.exports = router;