const asyncHandler = require('express-async-handler')
const Squad = require('../data/models/squadModel');


const saveSquadPlayers = asyncHandler(async (req, res) => {

    //request info
    const { _id, name, logo } = req.body;

    //create entry in database
    const squad = await Squad.create({
        _id,
        name,
        logo,
    });

    //check to see if it worked
    if(squad){
        res.status(201)
        console.log("All good over here")
    } else {
        res.status(400)
        throw new Error("Didnt work!!")
    }

});

module.exports = { saveSquadPlayers };