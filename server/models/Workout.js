const mongoose = require('mongoose');

const { Schema } = mongoose;

const workoutSchema = new Schema({

});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
