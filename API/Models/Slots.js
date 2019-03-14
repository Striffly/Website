const mongoose = require('mongoose')

const slotSchema = new mongoose.Schema({
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: false
    },
    assignee: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: false
    }
})

module.exports = slotSchema