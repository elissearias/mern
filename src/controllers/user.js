const User = require('../models/user');
const { request, response } = require('express');
const bcryptjs = require('bcrypt');

// Method post to create a new user
const registerUser = async ( req = request, res = response, next) => {
    try {
        const { fullname, username, email, password, role } = req.body;

        // Instance from our model
        const user = new User({ fullname, username, email, password, role });

        // Encrypting password
        const salt = bcryptjs.genSaltSync();
        user.password = bcryptjs.hashSync(password, salt);
        
        // Saving user
        await user.save();

        res.status(200).json({user});
    } catch (error) {
       next(error); 
    }
};

module.exports = {
    registerUser
}