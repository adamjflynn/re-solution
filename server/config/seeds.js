const db = require('./connection');
const { User, Exercise, Workout } = require('../models')

db.once('open', async () => {
    await Exercise.deleteMany();

    const excerises = await Exercise.insertMany([
        {

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