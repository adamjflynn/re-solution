const db = require('./connection');
const { User, Exercise, Workout } = require('../models')

db.once('open', async () => {
    console.log('Database fully seeded!')

    process.exit();
})