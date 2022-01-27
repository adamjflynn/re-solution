const mongoose = require('mongoose');
const { Schema } = mongoose;

const exerciseSchema = new Schema ({
    bodyPart: {
        type: String,
        required: true,
    },
    workoutId: { 
        type: String,
        required: true,
    }, 
    name: { 
        type: String,
        required: true,
    },
    target: { 
        type: String,
        required: true,
    },
    equiptment: { 
        type: String,
        required: true,
    },
    gifUrl: { 
        type: String,
        required: true,
    }
    },

    {timestamps: true }
);

const workoutSchema = new Schema({
    
    exercises: [exerciseSchema]

    // bodyPart: [String],
    // workoutId: [String], 
    // name: [String],
    // target: [String],
    // equiptment: [String],
    // gifUrl: [String] 

});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;