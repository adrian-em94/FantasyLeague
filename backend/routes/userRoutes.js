const express = require('express');
const { registerUser, authUser }= require('../controllers/userControllers');
const router = express.Router()


//first route is for new users 
//second route is for existing users to log in
router.route('/').post(registerUser);
router.route("/login").post(authUser);

module.exports = router;