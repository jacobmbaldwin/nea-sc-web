const express = require('express');
const router = express.Router();
const PortalDocument = require('../models/portalDocument');

// Getting All
router.get('/', async (req, res) => {
    try {
        const portalDocuments = await PortalDocument.find();
        res.json(portalDocuments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Getting One
router.get('/:id', getPortalDocument, (req, res) => {
    res.send(res.portalDocument);
});

//Creating One
router.post('/', async (req, res) => {
    const portalDocument = new PortalDocument({
        fileName: req.body.fileName,
        fileDescription: req.body.fileDescription,
        fileURL: req.body.fileURL
    });

    try {
        const newPortalDocument = await portalDocument.save();
        res.status(201).json(newPortalDocument);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Updating One
router.patch('/:id', getPortalDocument, async (req, res) => {
    if (req.body.fileName != null) {
        res.portalDocument.fileName = req.body.fileName;
    }
    if (req.body.fileDescription != null) {
        res.portalDocument.fileDescription = req.body.fileDescription;
    }
    if (req.body.fileURL != null) {
        res.portalDocument.fileURL = req.body.fileURL;
    }
    try {
        const updatedPortalDocument = await res.portalDocument.save();
        res.json(updatedPortalDocument);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Deleting One
router.delete('/:id', getPortalDocument, async (req, res) => {
    try {
        await res.portalDocument.remove();
        res.json({ message: 'Deleted Portal Document' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getPortalDocument(req, res, next) {
    let portalDocument;
    try {
        portalDocument = await PortalDocument.findById(req.params.id);
        if (portalDocument == null) {
            return res.status(404).json({ message: 'Cannon find document' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

module.exports = router;
