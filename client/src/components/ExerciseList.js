// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// const Exercise = props => (
//   <tr>
//     <td>{props.exercise.username}</td>
//     <td>{props.exercise.description}</td>
//     <td>{props.exercise.duration}</td>
//     <td>{props.exercise.date.substring(0,10)}</td>
//     <td>
//       <Link to={"/edit/"+props.exercise._id}>edit</Link> | <btn onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</btn>
//     </td>
//   </tr>
// )

// export default class ExercisesList extends Component {
//   constructor(props) {
//     super(props);

//     this.deleteExercise = this.deleteExercise.bind(this)

//     this.state = {exercises: []};
//   }

  
//   exerciseList() {
//     return this.state.exercises.map(currentexercise => {
//       return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h3>Exercises</h3>
//         <table className="table">
//           <thead className="thead-light">
//             <tr>
//               <th>Username</th>
//               <th>Description</th>
//               <th>Duration</th>
//               <th>Date</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             { this.exerciseList() }
//           </tbody>
//         </table>
//       </div>
//     )
//   }
// }