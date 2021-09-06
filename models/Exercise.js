const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
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
        required: true
        
    },
    clicked: {
        type: Boolean,
        default: false
    },
    
})

module.exports = mongoose.model('Exercise', ExerciseSchema);
