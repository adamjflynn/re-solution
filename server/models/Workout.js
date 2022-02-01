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
  type: String,
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
},

user: [{
  type:Schema.Types.ObjectId, 
  ref: 'User'
}]


});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;