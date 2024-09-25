const jwt = require('jsonwebtoken');
const User = require('../models/User');
const {jwtSecret} = require('../config/jwtConfig');
const { json } = require('express');

//Register user
exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = new User({ username, email, password });
        await user.save();
        res.status(201).json({ message: "User Registered successfully" });

    } catch (error) {
        res.status(400).json({message: "Error in registering user"});
    }

};

//Login user

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({email});
        if(!user || !await user.matchPassword(password)){
            return res.status(401).json({ error: 'Invalid Credentials'});

        }
        const token = jwt.sign({ userId: user._id}, jwtSecret, {expiresIn:'1h'});
        res.json({token});

    } catch (error) {
        res.status(400),json({error: "Error in Login user"});

    }
};

