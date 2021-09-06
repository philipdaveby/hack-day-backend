const mongoose = require('mongoose');

const { Schema } = mongoose;
const exerciseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        default: (Math.floor(Math.random() * 1000)).toString()
        
    },
    clicked: {
        type: Boolean,
        default: false
    },
});

module.exports = { exerciseSchema }