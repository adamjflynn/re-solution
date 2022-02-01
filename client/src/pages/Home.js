import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
return (
	<main className="flex-row justify-center mb-4">
			<div className="col-12 col-md-6">
				<div className="card">
					<h4 className="card-header">Welcome to (RE)Solution</h4>
					<div className="card-body">
          <button className="btn d-block w-100" type="submit">
          <Link to="/signup">SIGN UP</Link> 
							</button>
            <h5 className="card-header">OR</h5>
						
							<button className="btn d-block w-100" type="submit">
							<Link to="/login">LOGIN</Link>
							</button>
              <h5 className="card-header">To get started on your customized fitness journey</h5>
					
					</div>
				</div>
			</div>
		</main>
);
};

export default Home;
