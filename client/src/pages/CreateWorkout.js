import { Modal, Button, } from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import { useQuery } from '@apollo/client';
import { QUERY_ALLEXERCISES } from '../utils/queries';
import ExerciseList from '../components/ExcerciseList';
//import Auth from '../utils/auth';
//import { response } from 'express';
//import { useParams } from "react-router-dom";
//import { Link } from 'react-router-dom';
//import { searchGoogleBooks } from '../utils/API';
//import { saveBookIds, getSavedBookIds } from '../utils/localStorage';
//import { SAVE_BOOK } from '../utils/mutations';



const CreateWorkout = () => {
	const { loading, data } = useQuery(QUERY_ALLEXERCISES);
	console.log(data)
	const exercise = data?.allExercises || [];
	console.log (exercise)
	
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const [modalShow, setModalShow] = useState(false);
	
	const handleSubmit = async (event) => {
		event.preventDefault();
		
		//const handleShow = () => setShow(true);
		console.log(event.target.value)
		
		// const pickedName = event.target.value.allExercises.name
		// const pickedBodyPart = event.target.value.allExercises.bodyPart
		// const pickedEquipment = event.target.value.allExercises.equipment
		// const pickedTarget = event.target.value.allExercises.target

		



	}

	return (
			<div>
				<div className="flex-row justify-space-between">
					<div className="col-12 mb-3" onSumbit={handleSubmit}>
						{loading ? (
							<div>Loading...</div>
						) : (
							<ExerciseList exercise={exercise} title="Pick an exercise to add to your workout">

								<Modal className="modalContainer" show={show} onHide={handleClose}>
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
									</Modal> 

						  </ExerciseList>
									)}
						  
							
					</div>
				</div>
			</div>
		);
	};
	
	export default CreateWorkout;
	
	// <MyVerticallyCenteredModal
	// show={modalShow}
	// onHide={() => setModalShow(false)}
	//   />
	  
	  

	
	// 	<Container>
	// 	<Form onSubmit={handleFormSubmit}>
	//         <Form.Row>
	//           <Col xs={12} md={4}>
	//             <Button type='submit' variant='success' size='lg' >
	//               Submit Search
	//             </Button>
	//           </Col>
	//         </Form.Row>
	//       </Form>	
	//     <h2>
	//       {searchedExercises.length
	//         ? `Viewing ${searchedExercises.length} results:`
	//         : 'Search for an exercise to begin workout'}
	//     </h2>
	//     <CardColumns>
	//       {searchedExercises.map((book) => {
	//         return (
	//           <Card key={exercise.workoutID} border='dark'>
	//             {exercise.image ? (
	//               <Card.Img src={exercise.gifUrl} alt={`The cover for ${exercise.name}`} variant='top' />
	//             ) : null}
	//             <Card.Body>
	//               <Card.Title>{exercise.name}</Card.Title>
	//               <Card.Text>{exercise.bodyPart}</Card.Text>
	//               <Card.Text>{exercise.equipment}</Card.Text>
	//               <Card.Text>{exercise.target}</Card.Text>
	//               {/* {Auth.loggedIn() && (
	//                 <Button
	//                   disabled={savedBookIds?.some((savedBookId) => savedBookId === exercise.bookId)}
	//                   className='btn-block btn-info'
	//                   onClick={() => handleSaveBook(exercise.bookId)}>
	//                   {savedBookIds?.some((savedBookId) => savedBookId === exercise.bookId)
	//                     ? 'This exercise has already been saved!'
	//                     : 'Save this Book!'}
	//                 </Button>
	//               )} */}
	//             </Card.Body>
	//           </Card>
	//         );
	//       })}
	//     </CardColumns>
	//   </Container>
	// <main>
	// 	<div className="container flex-row justify-space-between-lg justify-center align-center">
		// 		<h1>Create Workout</h1>
		// 		<div className="container flex-row justify-space-between-lg justify-center align-center">
		// 			<h4>Something here</h4>
		// 		</div>
		// 		<div className="container flex-row justify-space-between-lg justify-center align-center">
		// 			<h4>Something here</h4>
		// 		</div>
		// 		<div className="container flex-row justify-space-between-lg justify-center align-center">
		// 			<h4>Something here</h4>
		// 		</div>
		// 	</div>
		// </main>
