import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
            }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const SAVE_WORKOUT = gql`
  mutation saveWorkout($exercise: String!, $date: String!, $duration: Int, $reps: Int, $sets: Int) {
    saveWorkout(exercise: $exercise, date: $date, duration: $duration, reps: $reps, sets: $sets ) {
     exercise
     date
     duration
     reps
     sets
    }
  }
`;

export const REMOVE_WORKOUT = gql`
  mutation removeWorkout($workoutId: String!) {
    saveWorkout(workoutId: $workoutId) {
      _id
    }
  }
`;

