const asyncHandler = require('express-async-handler')
const User = require('../data/models/userModel');
const generateToken = require('../utils/generateToken');

const registerUser = asyncHandler(async (req, res) => {
    //requesting field from the user
    const { name, email, password } = req.body;

    //checking to see if the user exists in DATABASE
    const userExists = await User.findOne({ email });

    //if the user exists in DATABASE then throw an error indicating so
    if(userExists){
        res.status(400)
        throw new Error('User Already Exists');
    }

    //otherwise a user is created in the DATABASE with the name, email, and password field passed in by user
    const user = await User.create({
        name,
        email,
        password,
    });

    //the conditional will run when a user is created and return back the id, name, email, and administration boolean
    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    } 
        //otherwise an error is thrown back 
        else {
        res.status(400)
        throw new Error("Error Occured!")
    }
});

const authUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({ email });

    if(user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error('Invalid email or password')
    }
});

module.exports = { registerUser, authUser };
