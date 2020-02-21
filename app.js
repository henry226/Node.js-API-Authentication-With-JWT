const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome to the APIs'
    });
});

app.post('/api/post', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err) {
            res.sendStatus(403);
        }
        else {
            res.json({
                message: 'Post Created',
                authData
            });
        }
    });
});

app.post('/api/login', (req, res) => {
    // Create User
    const user = {
        id: 1,
        username: 'brad',
        email: 'gmail'
    }
    jwt.sign({user}, 'secretkey', (err, token) => {
        res.json({
            token
        });
    });
});

// Formate of token
// Authorization: Bearer <access_token>

function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined'){
        // Split at the space
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // Next Middleware
        next();
    }
    else {
        res.sendStatus(403);
    }
}

app.listen(5000, () => console.log('Server running on port 5000'));