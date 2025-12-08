const express = require('express'); // express app
const router = express.Router(); // router logic

// where we import the controllers we will route
 const tripsController = require('../controllers/trips');

 // define route for our trips endpoint
 router
    .route('/trips')
    .get(tripsController.tripsList) // Get Method routes Triplist
    .post(tripsController.tripsAddTrip); // Post Method routes Add Trip

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode) // Get Method routes Triplist by code
    .put(tripsController.tripsUpdateTrip); // Put Method routes Update Trip by code

 module.exports = router;
