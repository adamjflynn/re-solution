const { gql } = require('apollo-server-express');
const { User, Workout, Exercise } = require('../models'); 

const typeDefs = gql`
type User {
    _id: ID!
    email: String! 
    password: String
    savedWorkout: [Workout]
}

type Workout{
    exercise: [Exercise]
    date: String!
    duration: Int
    reps: Int
    sets: Int
    user: [User]
}

type Exercise {
    _id: ID   
    bodyPart: String!
    equipment: String!
    target: String!
    gifUrl: String!
    workoutID: Int!
    name: String!
}

type Auth {
    token: ID!
    user: User
}


type Query {
    me: User!
    findBodyPart:[Exercise]!
    findExercise: [Exercise]! 
    findEquipment: [Exercise]!
    findTarget: [Exercise]!
    previousWorkouts: [Workout]!
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String!, password: String!): Auth
    saveWorkout(exerciseId: ID, date: String duration: Int, reps: Int, sets: Int): Workout
    removeWorkout(workoutID: String!): User
}
`;

module.exports = typeDefs;

//saveWorkout(exercise: [exerciseId: ID], date: String duration: Int, reps: Int, sets: Int): Workout
//saveWorkout(bodyPart: String!, equipment: String!, target: String!, gifUrl: String!, workoutID: Int!, name: String!): Workout

// saveWorkout(input: SavedWorkoutInput!): Workout
// input SavedWorkoutInput {
//     workouts: [{
//         bodyPart: String!
//         equipment: String!
//         target: String!
//         gifUrl: String!
//         workoutID: Int!
//         name: String!
//     }]
    
// }