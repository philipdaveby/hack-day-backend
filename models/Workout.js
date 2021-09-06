const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    workout: {
        type: Array,
        required: true
    },
    id: {
        type: Number,
        default: (Math.floor(Math.random() * 100000)).toString()
        
    },
    done: {
        type: Boolean,
        default: false
    },
    
})

module.exports = mongoose.model('Workout', WorkoutSchema);
