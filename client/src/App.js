import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
	BrowserRouter, Routes,
	Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import ExerciseList from "./components/EexerciseList";
import EditWorkout from "./components/EditWorkout";
import CreateWorkout from "./components/CreateWorkout";
import CreateUser from "./components/CreateUser";
import Login from "./components/LoginForm";

function App() {
	return (
		<BrowserRouter>
			<div className="container">
			<Navbar />
			<Routes>
	
			<Route path="/" exact component={<ExerciseList/>} />
			<Route path="/edit" component={<EditWorkout/>} />
			<Route path="/create" component={<CreateWorkout/>} />
			<Route path="/user" component={<CreateUser/>} />
			<Route path="/login" component={<Login/>} />
			</Routes>
			</div>
			</BrowserRouter>
	);
}

export default App;
