
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
          .populate('savedWorkout');
        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },

    findBodyPart: async (parent, args, context) => {
      if (context.user) {
        const exerciseData = await Exercise.find()
        .populate('bodyPart')    
        return exerciseData;
      }
      throw new AuthenticationError('Not logged in');
    },

    findExercise: async (parent, args, context) => {
      if (context.user) {
        const exerciseData = await Exercise.find()
   
        return exerciseData;
      }
      throw new AuthenticationError('Not logged in');
    },

    findEquipment: async (parent, args, context) => {
      if (context.user) {
        const equipmentData = await Exercise.find()
        .populate('equipment')      
        return equipmentData;
      }
      throw new AuthenticationError('Not logged in');
    },

    findTarget: async (parent, args, context) => {
      if (context.user) {
        const targetData = await Exercise.find()
        .populate('target')      
        return targetData;
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

    saveWorkout: async (parent, {...args, exerciseId } , context) => {
      if (context.user) {
        const updatedWorkout = await User.findOneAndUpdate(
          { _id: exerciseId },
          //{ _id: context.user._id },
          {$push: { exercise: exercise._id } },
          //{ $addToSet: { workouts: exerciseId } },
          { new: true }
          )
          
          // .populate('bodyPart')
          // .populate('equipment')
          // .populate('target')
          // .populate('gifUrl')
          // .populate('workoutID')
          // .populate('name')

          
          return updatedWorkout;
      }

      throw new AuthenticationError('You need to be logged in!');
  },

  removeWorkout: async (parent, args, context) => {
    if(context.user) {
    const updatedUser = await User.findOneAndUpdate(
      { _id: context.user._id },
      { $pull: { Workout: { _id: args.input } } },
      { new: true }
    )
    return updatedUser;
  }
  }
} 
};

module.exports = resolvers;