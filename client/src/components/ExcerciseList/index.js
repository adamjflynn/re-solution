import React from 'react';
import { Container, Card } from 'react-bootstrap';


const ExerciseList = ({ exercise }) => {
  if (!exercise.length) {
    return <h3>No Exercises Avaible</h3>;
  }
  
  return (
         <Container>
           {exercise && exercise.map(exercise => (
              <Card key={exercise.workoutID} border='dark'>
                {exercise.image ? (
                  <Card.Img src={exercise.gifUrl} alt={`The cover for ${exercise.name}`} variant='top' />
                  ) : null}
                <Card.Body>
                  <Card.Title>{exercise.name}</Card.Title>
                  <Card.Text>{exercise.bodyPart}</Card.Text>
                  <Card.Text>{exercise.equipment}</Card.Text>
                  <Card.Text>{exercise.target}</Card.Text>
                </Card.Body>
              </Card>
           ))}
         </Container>
        );
};
  
  export default ExerciseList;


