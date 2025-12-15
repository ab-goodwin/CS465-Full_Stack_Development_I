 const jwt = require('jsonwebtoken'); // enable json web tokens
const express = require('express'); // express app
const router = express.Router(); // router logic

// where we import the controllers we will route
 const tripsController = require('../controllers/trips');
 const authController = require('../controllers/authentication');


 // Method to authenticate our JWT
function authenticateJWT(req, res, next) {
  // console.log('In Middleware');
  const authHeader = req.headers["authorization"];
  // console.log('Auth Header: ' + authHeader);
  if (authHeader == null) {
    console.log("Auth Header Required but NOT PRESENT!");
    return res.sendStatus(401);
  }
  let headers = authHeader.split(" ");
  if (headers.length < 1) {
    console.log("Not enough tokens in Auth Header: " + headers.length);
    return res.sendStatus(501);
  }
  const token = authHeader.split(" ")[1];
  // console.log('Token: ' + token);
  if (token == null) {
    console.log("Null Bearer Token");
    return res.sendStatus(401);
  }
  // console.log(process.env.JWT_SECRET);

  // console.log(jwt.decode(token));
  const verified = jwt.verify(
    token,
    process.env.JWT_SECRET,
    (err, verified) => {
      if (err) {
        return res.sendStatus(401).json("Token Validation Error!");
      }
      req.auth = verified; // Set the auth paramto the decoded object
    }
  );
  next(); // We need to continue or this will hang forever
}


router.route('/register').post(authController.register); // Post Method routes register
router.route('/login').post(authController.login); // Post Method routes login

 // define route for our trips endpoint
 router
    .route('/trips')
    .get(tripsController.tripsList) // Get Method routes Triplist
    .post(authenticateJWT, tripsController.tripsAddTrip); // Post Method routes Add Trip with JWT authentication

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode) // Get Method routes Triplist by code
    .put(authenticateJWT, tripsController.tripsUpdateTrip); // Put Method routes Update Trip by code

 module.exports = router;
