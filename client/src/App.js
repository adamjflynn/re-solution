import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
	BrowserRouter, Routes,
	Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import ExerciseList from "./components/ExerciseList";
import EditWorkout from "./components/EditWorkout";
import CreateWorkout from "./components/CreateWorkout";
import CreateUser from "./components/CreateUser";
import LoginForm from "./components/LoginForm";



function App() {
	return (
		<BrowserRouter>

			<div className="flex-column justify-flex-start min-100-vh">
			
			<Navbar />
			
			
			<Routes>
	
			<Route path="/login" component={<LoginForm/>} />
			<Route path="/edit" component={<EditWorkout/>} />
			<Route path="/create" component={<CreateWorkout/>} />
			<Route path="/user" component={<CreateUser/>} />
			<Route path="/ExerciseList" component={<ExerciseList/>} />

			</Routes>
			</div>
			</BrowserRouter>
	);
}

export default App;
