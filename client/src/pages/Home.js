import React from 'react';
import { Link } from 'react-router-dom';

//import { QUERY_ME_BASIC } from '../utils/queries';
//import Auth from '../utils/auth';

const Home = () => {

//This will be used if there is a rendering to show user info while logged in. 	
//const loggedIn = Auth.loggedIn();

return (
	<main className="flex-row justify-center mb-4">
		<div className="col-12 col-md-6">
			<div className="card align-center">
				<h2 className="card-header">Welcome to</h2>{" "}
				<h2 className="text-tertiary p-2">(RE)Solution</h2>
				<h5 className="card-body text-tertiary">Your resolution solution</h5>
				<div className="card-body">
					<button className="btn d-block w-48" type="submit">
						<Link to="/signup">SIGN UP</Link>
					</button>
					<h4 className="card-header">OR</h4>
					<button className="btn d-block w-48" type="submit">
						<Link to="/login">LOGIN</Link>
					</button>
					<h5 className="card-body text-tertiary">
						To get started on your customized fitness journey
					</h5>
				</div>
			</div>
		</div>
	</main>
);
};

export default Home;
