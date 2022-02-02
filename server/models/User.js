const mongoose = require('mongoose');

const { Schema, Types } = mongoose;

const bcrypt = require('bcrypt');

const userSchema = new Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    savedWorkouts:  [{
        type:Schema.Types.ObjectId, 
        ref: 'Workout'
    }]
});

//Password creation for middleware and then compares password with hashed password
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
  });
  

  userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
  };

const User = mongoose.model('User', userSchema)

module.exports = User;