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
    equipment: { 
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

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;