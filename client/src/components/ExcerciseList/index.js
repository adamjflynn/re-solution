import React from 'react';

const ExerciseList = ({ exercise, title }) => {
  if (!exercise.length) {
    return <h3>Workout</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {exercise &&
        exercise.map(exercise => (
          <div key={exercise._id} className="card mb-3">
            <p className="card-header">
              {exercise.username}
              Exercise on {exercise.createdAt}
            </p>
            
          </div>
        ))}
    </div>
  );
};

export default ExerciseList;