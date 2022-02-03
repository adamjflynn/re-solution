import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
// import ExerciseList from '../components/ExerciseList';

import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

const ViewSavedWorkouts = () => {

	const { loading, data } = useQuery(QUERY_ME);
	console.log(data)
	

	return (
		<main>
			<div className="container flex-row justify-space-between-lg justify-center align-center">
				<h1>Look at all those Workouts</h1>
				<div className="container flex-row justify-space-between-lg justify-center align-center">
					<h4>Something here</h4>
				</div>
				<div className="container flex-row justify-space-between-lg justify-center align-center">
					<h4>Something here</h4>
				</div>
				<div className="container flex-row justify-space-between-lg justify-center align-center">
					<h4>Something here</h4>
				</div>
                <button className="btn d-block w-100" type="submit">
							<Link to="/profile">Return to Profile</Link>
							</button>
			</div>
		</main>
	);
};

export default ViewSavedWorkouts;