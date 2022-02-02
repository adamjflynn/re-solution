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
    _id: ID!
    bodyPart: String!
    equipment: String!
    target: String!
    gifUrl: String!
    id: Int!
    name: String!
    
}
type Auth {
    token: ID!
    user: User
}
type Query {
    me: [User]!
    findBodyPart:[Exercise]!
    findExerciseById: [Exercise]! 
    findEquipment: [Exercise]!
    findTarget: [Exercise]!
    previousWorkouts: [Workout]!
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