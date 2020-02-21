const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome to the APIs'
    });
});

app.listen(5000, () => console.log('Server running on port 5000'));