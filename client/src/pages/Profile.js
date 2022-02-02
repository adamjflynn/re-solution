import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

// import ExerciseList from '../components/ExerciseList';

const Profile = () => {
  return (
    <main>
    <div className="container flex-row justify-space-between-lg justify-center align-center">      
        <h1>User Profile (will probably use a query to import the users info?)</h1>     
        <div className="container flex-row justify-space-between-lg justify-center align-center">
          <h4>View Workouts (with link to previous workouts)</h4>
        </div>
        <div className="container flex-row justify-space-between-lg justify-center align-center">
          <h4>Create Workout (with link to new workout page)</h4>
        </div> 
        <div className="container flex-row justify-space-between-lg justify-center align-center">
          
        </div>
        
      </div>
  </main>
  );
  };
  

export default Profile;