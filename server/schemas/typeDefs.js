const { gql } = require('apollo-server-express');
const { User, Workout } = require('../models'); //need to verify this route


const typeDefs = gql`
type User {
    _id: ID!
    email: String! 
    savedWorkout: [Workout]
}

type Workout{
    workouts: [savedWorkout]
    
}

type Exercise {

    bodyPart: [String!]
    {
        equiptment: [String!]
        {
            target: [String!]
            {
                gifUrl: [String!]
                id: [Int!]
                name: [String!]
            }
        }
    }

}

type Auth {
    token: ID!
    user: User
}

input SavedWorkout {
    workouts: {[
        _id: ID
        exercises: [Exercise]
    ]}
}


type Query {
    me: [User]!
    findExercise: [Exercise]! 
    previousWorkouts: [Workout]!
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String!, password: String!): Auth
    saveExercise(bodyPart: String!, equiptment: String!, target: String!, gifUrl: String!, id: Int!, name: String!): SavedWorkout
    saveWorkout(input: SavedWorkout!): Workout
    removeWorkout(workoutId: String!): User
}
`;

module.exports = typeDefs;

