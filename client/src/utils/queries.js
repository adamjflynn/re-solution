//comment
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

export const QUERY_ALLEXERCISES = gql`
 {
     allExercises{
                bodyPart
                equipment
                target
                gifUrl
                workoutID
                name
     }
 }
`;

export const QUERY_FINDTARGET = gql`
{
    findTarget{
        target
    }
}
`;
export const QUERY_FINDBODYPART = gql`
{
    findBodyPart{
        bodyPart
    }
}
`;
export const QUERY_FINDEQUIPMENT = gql`
{
    findEquipment{
        equipment
    }
}
`;
