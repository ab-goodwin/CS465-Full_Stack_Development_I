const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // register model
const Model = mongoose.model('trips');

// GET: /trips - list of all trips
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsList = async(req, res) => {
    const q = await Model
        .find({}) // no filter, return all records
        .exec();

        //uncomment the following line to show the results
        // of query in the console
        //console.log(q);

    if(!q)
    { // query returned no data
        return res
                .status(404)
                .json(err);
    } else {
        return res
                .status(200)
                .json(q);
    }

};

// GET: /trips:tripCode - lists a single trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode}) // no filter, return all records
        .exec();

        //uncomment the following line to show the results
        // of query in the console
        //console.log(q);

    if(!q)
    { // query returned no data
        return res
                .status(404)
                .json(err);
    } else { // return resulting list
        return res
                .status(200)
                .json(q);
    }

};

module.exports = {
    tripsList,
    tripsFindByCode
};