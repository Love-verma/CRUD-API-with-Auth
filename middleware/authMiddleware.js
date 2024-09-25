const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/jwtConfig');

exports.protect = (req, res, next) =>{
    const token = req.headers.authorization?.split(' ')[1];
    if(!token) return res.status(401).json({ error: 'Unauthorized'});

    try {
        const decoded = jwt.verify(token, jwtSecret);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token'});

    };
}