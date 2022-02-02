
const { AuthenticationError } = require('apollo-server-express');

const { User, Workout, Exercise } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('email')
          .populate('savedWorkouts');
        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },

    findBodyPart: async (parent, args, context) => {
      if (context.user) {
        const exerciseData = await Exercise.find('bodyPart')      
        return exerciseData;
      }
      throw new AuthenticationError('Not logged in');
    },
    findEquipment: async (parent, args, context) => {
      if (context.user) {
        const equipmentData = await Exercise.find('equipment')      
        return equipmentData;
      }
      throw new AuthenticationError('Not logged in');
    },
    findTarget: async (parent, args, context) => {
      if (context.user) {
        const targetData = await Exercise.find('target')      
        return Data;
      }
      throw new AuthenticationError('Not logged in');
    },

    previousWorkouts: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('Workout');
        return userData;
      }
      throw new AuthenticationError('Not logged in');
    }

  },

  Mutation: {
    addUser: async (parent, args) => {
          const user = await User.create(args);
          const token = signToken(user);

        return { token, user };
    },

    login: async (parent, { email, password }) => {
         const user = await User.findOne({ email });
  
         if (!user) {
           throw new AuthenticationError('Incorrect credentials');
         }
  
         const correctPw = await user.isCorrectPassword(password);
  
         if (!correctPw) {
           throw new AuthenticationError('Incorrect credentials');
         }
  
         const token = signToken(user);
         return { token, user };
    },

  //   saveExercise: async (parent, args , context) => {
  //     if (context.user) {
  //       const updatedUser = await User.findOneAndUpdate(
  //         { _id: context.user._id },
  //         { $addToSet: { savedWorkout: args.input } },
  //         { new: true }
  //       )

  //       return updatedUser;
  //     }

  //     throw new AuthenticationError('You need to be logged in!');
  // },

  saveWorkout: async (parent, args, context) =>{

    if(context.user){
    const savedWorkout = await Workout.create(args);
    savedWorkout.save();
    console.log(savedWorkout);
    const addWorkoutToUser = await User.findOneAndUpdate(
      {_id: context.user._id},
      {$push: {savedWorkouts: {_id: savedWorkout._id}}},
      {new: true}
      )
      addWorkoutToUser.save();
      console.log(savedWorkout._id);
      console.log(addWorkoutToUser);
    return savedWorkout
    }
  },

  removeWorkout: async (parent, args, context) => {
    if(context.user) {
    const updatedUser = await User.findOneAndUpdate(
      { _id: context.user._id },
      { $pull: { Workout: { _id: saveWorkout._id } } },
      { new: true }
    )
    return updatedUser;
  }
  }
} 
};

module.exports = resolvers;