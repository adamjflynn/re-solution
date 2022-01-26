const { gql } = require('apollo-server-express');
const { User } = require('../models'); //need to verify this route

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        savedWorkouts: [Workouts]
    }
    
    type Workout {
        workoutId: String
        name: String
        bodyPart: String
        targetMuscleGroup: String
        targetMuscle: String
        equiptment: [String]
    }
    
    type Auth {
        token: ID!
        User: user
    }
    
    type Query {
        me: User
    }
     input SavedWorkout {
        workoutId: String
        name: String
        targetMuscleGroup: String
        targetMuscle: String
        equiptment: String
        weight: Int
        repitions: Int
        sets: Int
     }
    
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!. password: String!): Auth
        saveWorkout(input: SavedWorkout!): User
        removeWorkout(workoutId: String!): User
    }`

    module.exports = typeDefs;