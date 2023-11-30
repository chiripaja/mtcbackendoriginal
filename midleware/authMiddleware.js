const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'Token no proporcionado' });
    }
    try {
        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) {
                return res.status(403).json({ message: 'Token inválido' });
            }            
            const {id}=user
            req.id = id;
            next();
        });
    } catch (error) {
        return res.status(401).json({ message: 'Token no valido' });
    }


};

module.exports = { authenticateToken };