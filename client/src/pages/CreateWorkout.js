import { Modal, Button, } from 'react-bootstrap';
import React, { useState, useEffect, setShow } from "react";
import { useQuery } from '@apollo/client';
import { QUERY_ALLEXERCISES } from '../utils/queries';
import ExerciseList from '../components/ExcerciseList';
//import Auth from '../utils/auth';



const CreateWorkout = () => {
	const { loading, data } = useQuery(QUERY_ALLEXERCISES);
	console.log(data)
	const exercise = data?.allExercises || [];
	console.log (exercise)


	return (
			<div>
				<div className="flex-row justify-space-between">
					<div className="col-12 mb-3" >
						{loading ? (
							<div>Loading...</div>
						) : (
							<ExerciseList exercise={exercise} title="Pick an exercise to add to your workout">
						  </ExerciseList>
									)}
						  
							
					</div>
				</div>
			</div>
		);
	};
	
	export default CreateWorkout;
	
	