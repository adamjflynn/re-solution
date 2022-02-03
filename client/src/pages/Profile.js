import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

// import ExerciseList from '../components/ExerciseList';

const Profile = () => {
	return (
		<main>
		<div className="flex-row mb-3">
			<h2 className="bg-dark text-secondary p-3 display-inline-block">
				  Viewing USER's profile.
			</h2>
		</div>
		
			
			
		<div className="flex-row mb-4">
			<div className="col-12 col-md-6">
				<div className="card">
					<h2 className="card-header">User Profile</h2>
					<h5 className="card-header"></h5>
					<div className="card-body">
						<button className="btn d-block w-100" type="submit">
							<Link to="/createworkout">Create Workout</Link>
						</button>
						<button className="btn d-block w-100" type="submit">
							<Link to="/viewworkouts">View Workouts</Link>
						</button>
					</div>
				</div>
			</div>
			</div>
		</main> 
	);
};

export default Profile;
