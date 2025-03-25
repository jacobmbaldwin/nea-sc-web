const mongoose = require('mongoose');

const portalDocumentSchema = new mongoose.Schema({
    fileName: {
        type: String,
        required: true
    },
    fileDescription: {
        type: String,
        required: false
    },
    fileURL: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('PortalDocument', portalDocumentSchema);
