import React from 'react';
import { Container, Card, Button, Modal } from 'react-bootstrap';
import { useState } from "react";


const ExerciseList = ({ exercise }) => {
  if (!exercise.length) {
    return <h3>No Exercises Avaible</h3>;
  }
  // const [show, setShow] = useState(false);
	// const handleClose = () => setShow(false);
	// const handleShow = () => setShow(true);
	// const [modalShow, setModalShow] = useState(false);
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
                  <Button variant="primary" type="submit" > Pick this Exercise </Button> <br></br>
                  <Button variant="primary" type="submit" > Add This Exercise to Workout</Button> 
{/*                     
                    <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>{exercise.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {exercise.bodyPart}
                      {exercise.equipment}
                      {exercise.target}
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                    </Modal.Footer>
                    </Modal> */}

                </Card.Body>
              </Card>
           ))}
         </Container> 
         </div>
        );
};
  
  export default ExerciseList;


