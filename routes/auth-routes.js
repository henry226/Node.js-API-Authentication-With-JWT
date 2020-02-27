const router = require('express').Router();
const passport = require('passport');

// auth router
router.get('/login', (req, res) => {
    res.render('login');
});

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    res.send('logging out');
});

// auth with Google
router.get('/google', passport.authenticate('google', {
    // what do we want to retrieve from user's profile
    scope: ['profile']
}));

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.send('You reached callback URL');
});

module.exports = router;