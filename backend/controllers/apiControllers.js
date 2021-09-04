const asyncHandler = require('express-async-handler')
const Squad = require('../data/models/squadModel');


const saveSquadPlayers = asyncHandler(async (req, res) => {

    //request info
    const { id, name, logo, /*players*/ } = req.body;

    //create entry in database
    const squad = await Squad.create({
        _id,
        name,
        logo,
        //players,
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