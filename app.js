const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome to the APIs'
    });
});

app.post('/api/post', (req, res) => {
    res.json({
        message: 'Post Created'
    })
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


app.listen(5000, () => console.log('Server running on port 5000'));