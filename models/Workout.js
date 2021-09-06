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
    workoutId: {
        type: Number,
        required: true
        
    },
    done: {
        type: Boolean,
        default: false
    },
    
})

module.exports = mongoose.model('Workout', WorkoutSchema);
