const mongoose = require('./db');
const Trip = require('./travlr');

const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('data/trips.json', 'utf8'));

const seedDB = async () => {
    // Wait for DB connection
    await mongoose.connection.asPromise();

    console.log("Connected. Seeding database...");

    await Trip.deleteMany({});
    await Trip.insertMany(trips);

    console.log("Seed completed.");
};

seedDB().then(async () => {
    await mongoose.connection.close();
    process.exit(0);
});