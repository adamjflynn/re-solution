const { gql } = require('apollo-server-express');
const { User, Workout } = require('../models'); //need to verify this route

const typeDefs = gql`
type User {
    _id: ID!
    email: String! 
    savedWorkout: [Workout]
}
type Workout{
    exercise: String!
    date: String!
    duration: Int
    reps: Int
    sets: Int
}
type Exercise {
    
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
    me: [User]!
    allExercises: [Exercise]
    findBodyPart:[Exercise]
    findExerciseById: [Exercise]
    findEquipment: [Exercise]
    findTarget: [Exercise]
    previousWorkouts: [Workout]
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String!, password: String!): Auth
    saveWorkout(exercise: String!, date: String!, duration: Int, reps: Int, sets: Int ): Workout
    removeWorkout(workoutId: String!): User
}
`;

module.exports = typeDefs;

// input SaveExecise {
//     workouts: {[
//         _id: ID
//         exercises: [Exercise]
//     ]}
// }
// saveWorkout(input: SavedWorkout!): Workout