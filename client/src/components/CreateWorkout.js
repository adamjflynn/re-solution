// import React, { Component } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// export default class CreateWorkout extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.onChangeUsername = this.onChangeUsername.bind(this);
// 		this.onChangeDescription = this.onChangeDescription.bind(this);
// 		this.onChangeDuration = this.onChangeDuration.bind(this);
// 		this.onChangeDate = this.onChangeDuration.bind(this);
// 		this.onSubmit = this.onSubmit.bind(this);

// 		this.state = {
// 			username: "",
// 			description: "",
// 			duration: 0,
// 			date: new Date(),
// 			users: [],
// 		};
// 	}
// 	componentDidMount() {
// 		this.setState({
// 			user: ["test user"],
// 			username: "test user",
// 		});
// 	}

// 	onChangeUsername(e) {
// 		this.setState({
// 			username: e.target.value,
// 		});
// 	}

// 	onChangeDescription(e) {
// 		this.setState({
// 			description: e.target.value,
// 		});
// 	}
// 	onChangeDuration(e) {
// 		this.setState({
// 			duration: e.target.value,
// 		});
// 	}
// 	onChangeDate(date) {
// 		this.setState({
// 			date: date,
// 		});
// 	}

// 	onSubmit(e) {
// 		e.preventDefault();

// 		const workout = {
// 			username: this.state.username,
// 			description: this.state.description,
// 			duration: this.state.duration,
// 			date: this.state.date,
// 		};
// 		console.log(workout);

// 		window.location = "/";
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<h3>Create New Workout</h3>
// 				<form onSubmit={this.onSubmit}>
// 					<div className="form-group">
// 						<label>Username: </label>
// 						<select
// 							ref="userInput"
// 							required
// 							className="form-control"
// 							value={this.state.username}
// 							onchange={this.onChangeUsername}
// 						>
// 							{this.state.users.map(function (user) {
// 								return (
// 									<option key={user} value={user}>
// 										{user}
// 									</option>
// 								);
// 							})}
// 						</select>
// 					</div>

// 					<div className="form-group">
// 						<label>Description: </label>
// 						<input
// 							type="text"
// 							className="form-control"
// 							value={this.state.duration}
// 							onChange={this.onChangeduration}
// 						/>
// 					</div>

// 					<div className="form-group">
// 						<label>Duration: </label>
// 						<input
// 							type="text"
// 							className="form-control"
// 							value={this.state.duration}
// 							onChange={this.onChangeDuration}
// 						/>
// 					</div>

// 					<div className="form-group">
// 						<label>Date: </label>
// 						<div>
// 							<DatePicker selcted={this.state.date} onChange={this.onChange} />
// 						</div>
// 					</div>

// 					<div className="form-group">
// 						<input
// 							type="submit"
// 							value="Create Workout"
// 							className="btn btn-primary"
// 						/>
// 					</div>
// 				</form>
// 			</div>
// 		);
// 	}
// }
