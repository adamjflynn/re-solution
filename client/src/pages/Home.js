// import React from 'react';
// import { useQuery } from '@apollo/client';

// import { QUERY_EXERCISES } from '../utils/queries';
// import ExerciseList from '../components/ExerciseList';

// const Home = () => {
//   // use useQuery hook to make query request
//   const { loading, data } = useQuery(QUERY_EXERCISES);
//   const exercises = data?.exercises || [];
//     console.log(exercises);

//   return (
//     <main>
//   <div className="flex-row justify-space-between">
//     <div className="col-12 mb-3">
//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <ExerciseList exercises={exercise} title="Checkout your progress" />
//       )}
//     </div>
//   </div>
// </main>
//   );
// };

// export default Home;
