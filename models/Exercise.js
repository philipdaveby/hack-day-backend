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
        default: (Math.floor(Math.random() * 100000)).toString()
        
    },
    clicked: {
        type: Boolean,
        default: false
    },
    
})

module.exports = mongoose.model('Exercise', ExerciseSchema);
