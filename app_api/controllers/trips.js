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

//POST: /trips - adds new trip
const tripsAddTrip = async(req, res) => {
    const newTrip = new Trip ({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    });

    const q = await newTrip.save();

        if(!q)
        { return res
                .status(400)
                .json(err);
        } else {
            return res
                    .status(201)
                    .json(q);
        }   
};

const tripsUpdateTrip = async(req, res) => {
    const q = await Model
        .findOneAndUpdate(
            {'code' : req.params.tripCode}, // filter
            {
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.image,
                description: req.body.description
                }
            )
            .exec();

        if(!q)
        { //Database returns no data
            return res
                    .status(404)
                    .json(err);
        } else { // return resulting list
            return res
                    .status(201)
                    .json(q);
        }
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};