const mongoose = require('mongoose');

const { Schema, Types } = mongoose;

const Exercise = require('./Exercise')

const workoutSchema = new Schema({

exercise: [
    {
        type:Schema.Types.ObjectId, 
        ref: 'Exercise'
    }
],

date: {
  type: Date,
  required: true
}, 

duration: {
  type: Number,
  minlength: 1
},

reps: {
    type: Number,
    minlength: 1
},

sets: {
    type: Number,
    minlength: 1
}

});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;