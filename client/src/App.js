import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import ExerciseList from 
// import EditWorkout from
// import CreateWorkout from
// import CreateUser from 

function App() {
	return (
	  <Router>
		<div className="container">
		<Navbar />
		<br/>
		<Route path="/" exact component={ExercisesList} />
		<Route path="/edit/:id" component={EditExercise} />
		<Route path="/create" component={CreateExercise} />
		<Route path="/user" component={CreateUser} />
		</div>
	  </Router>
	);
  }

export default App;
