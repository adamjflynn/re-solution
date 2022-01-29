const db = require('./connection');
const { User, Exercise, Workout } = require('../models')

db.once('open', async () => {
    await Exercise.deleteMany();

    const excerises = await Exercise.insertMany([
        {
            bodyPart:"cardio",
            equipment:"body weight",
            gifUrl:"http://d205bpvrqc9yn1.cloudfront.net/0685.gif",
            workoutID:"0685",
            name:"run",
            target:"cardiovascular system"     
        }

    ])

    console.log("Exercises seeded!")

    await Workout.deleteMany();

    const workouts = await Workout.insertMany([

    ])

    console.log("Workouts seeded!")

    await User.deleteMany();

    const users = await User.insertMany([

    ])
    
    console.log('Users seeded!')

    console.log('Database fully seeded!')

    process.exit();
})