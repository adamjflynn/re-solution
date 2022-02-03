import React from "react";

import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

// import ExerciseList from '../components/ExerciseList';

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

const CreateWorkout = () => {
	return (
		<main>
			<div className="container flex-row justify-space-between-lg justify-center align-center">
				<h1>Create Workout</h1>
				<div className="container flex-row justify-space-between-lg justify-center align-center">
					<h4>Something here</h4>
				</div>
				<div className="container flex-row justify-space-between-lg justify-center align-center">
					<h4>Something here</h4>
				</div>
				<div className="container flex-row justify-space-between-lg justify-center align-center">
					<h4>Something here</h4>
				</div>
			</div>
		</main>
	);
};

export default CreateWorkout;
