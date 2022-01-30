
const db = require('./connection');
const { User, Exercise, Workout } = require('../models');

db.once('open', async () => {
    await Exercise.deleteMany();
    console.log("Deleted All Exercises!");

    const exercises = await Exercise.insertMany([
        {
            bodyPart:"cardio",
            equipment:"body weight",
            gifUrl:"http://d205bpvrqc9yn1.cloudfront.net/0685.gif",
            workoutID:"0685",
            name:"run",
            target:"cardiovascular system"     
        },
        {
            bodyPart: "cardio",
            equipment: "body weight",
            gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3637.gif",
            workoutID:"3637",
            name:"wheel run",
            target:"cardiovascular system",
        },
        {
            bodyPart:"cardio",
            equipment:"body weight",
            gifUrl:"http://d205bpvrqc9yn1.cloudfront.net/3223.gif",
            workoutID:"3223",
            name:"star jump (male)",
            target:"cardiovascular system"
        },
        {
            bodyPart:"upper arms",
            equipment:"dumbbell",
            "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/0285.gif",
            workoutID:"0285",
            name:"dumbbell alternate biceps curl",
            target:"biceps"
        },
        {
            bodyPart:"upper arms",
            equipment:"dumbbell",
            gifUrl:"http://d205bpvrqc9yn1.cloudfront.net/1648.gif",
            workoutID:"1648",
            name:"dumbbell alternate seated hammer curl",
            target:"biceps"
        },
        {
            bodyPart:"upper arms",
            equipment:"dumbbell",
            gifUrl:"http://d205bpvrqc9yn1.cloudfront.net/1654.gif",
            workoutID:"1654",
            name:"dumbbell biceps curl reverse",
            target:"biceps"
        }

    ]);

    console.log(exercises);

    console.log("Exercises seeded!");

    await Workout.deleteMany();

    const workouts = await Workout.insertMany([
        {
            exercise: exercises[0],
            date: 2022-01-05,
            duration: 20
        },
        {
            exercise: exercises[5],
            date: 2022-01-06,
            reps: 10,
            sets: 3
        }

    ])
    console.log(workouts);
    console.log("Workouts seeded!");

    await User.deleteMany();

    const users = await User.insertMany([

        {
            email: "test@test.com",
            password: "Testerino22",
            savedWorkout: [workouts[0]]
        },
        {
            email: "steven@test.com",
            password: "BubbaGump11",
            savedWorkout: [workouts[1]]
        }

    ]);
    
    console.log(users);
    console.log('Users seeded!');

    console.log('Database fully seeded!');

    process.exit();
})