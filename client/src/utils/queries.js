// import { gql } from '@apollo/client';

// export const QUERY_USER = gql`
//   query user($username: String!) {
//     user(username: $username) {
//       _id
//       email
//       }
      
//       }
//     }
//   }
// `;


import { gql } from '@apollo/client';

export const QUERY_ME = gql`
 {
     me{
         _id
         email
         savedWorkout{
             workouts{
                bodyPart
                equipment
                target
                gifUrl
                workoutID
                name
             }
             date
             duration
             sets
             reps   
         }
     }
 }
`;

export const QUERY_ME_BASIC = gql`
 {
     me{
         _id
         email
     }
 }
`;