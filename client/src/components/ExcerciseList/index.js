import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';



const ExerciseList = ({ exercise }) => {
  if (!exercise.length) {
    return <h3>No Exercises Avaible</h3>;
  }

  return (
    <div>
         <Container className="exerciseContainer">
           {exercise && exercise.map(exercise => (
              <Card key={exercise.workoutID} border='dark' className="exerciseCard">
                {exercise.image ? (
                  <Card.Img src={exercise.gifUrl} alt={`The cover for ${exercise.name}`} variant='top' />
                  ) : null}
                <Card.Body>
                  <Card.Title>{exercise.name}</Card.Title>
                  <Card.Text>{exercise.bodyPart}</Card.Text>
                  <Card.Text>{exercise.equipment}</Card.Text>
                  <Card.Text>{exercise.target}</Card.Text>
                  <Button variant="primary" type="submit"> Pick this Exercise </Button> <br></br>
                  <Button variant="primary" type="submit" > Add This Exercise to Workout</Button> 
                </Card.Body>
              </Card>
           ))}
         </Container> 
         </div>
        );
};
  
  export default ExerciseList;


