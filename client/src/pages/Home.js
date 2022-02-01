import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
return (
  <main>
    <div class="card" className="container flex-row justify-space-between-lg justify-center align-center">      
        <h1>Welcome to</h1>     
        <div className="container flex-row justify-space-between-lg justify-center align-center">
          <h1>(RE)Solution</h1>
        </div>
        <div className="container flex-row justify-space-between-lg justify-center align-center">
          <h3>Your resolution solution</h3>
        </div> 
        <div className="container flex-row justify-space-between-lg justify-center align-center">
          <p><Link to="/signup" class="signup-link">SIGN UP</Link> or <Link to="/login" class="login-link">LOGIN</Link> to get started on your customized fitness journey</p>
        </div>
        
      </div>
  </main>
);
};

export default Home;
