const mongoose = require('mongoose');

const { Schema } = mongoose;

const Exercise = require('./Exercise')

const workoutSchema = new Schema({

exercise: [Exercise.schema],

date: {
  type: Date,
  required: true
}, 

duration: {
  type: Number,
  length: 1
},

reps: {
    type: Number,
    length: 1
},

sets: {
    type: Number,
    length: 1
}

});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
