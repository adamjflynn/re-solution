import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
	BrowserRouter, Routes,
	Route,
} from "react-router-dom";

// import Navbar from "./elements/navbar";
import ExerciseList from "./elements/exerciseList";
import EditWorkout from "./elements/editWorkout";
import CreateWorkout from "./elements/createWorkout";
import CreateUser from "./elements/createUser";

function App() {
	return (
		<BrowserRouter>
			<div className="container">
			<Routes>
			{/* <Navbar /> */}
	
			<Route path="/" exact element={<ExerciseList/>} />
			<Route path="/edit" element={<EditWorkout/>} />
			<Route path="/create" element={<CreateWorkout/>} />
			<Route path="/user" element={<CreateUser/>} />
			</Routes>
			</div>
			</BrowserRouter>
	);
}

export default App;
