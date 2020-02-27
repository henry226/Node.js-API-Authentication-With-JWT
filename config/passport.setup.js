const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(
    new GoogleStrategy({
    // options for google strat
    clientID: '768185898266-tbo672gddghlvvor9jb1dvfjjsnmors8.apps.googleusercontent.com',
    clientSecret: 'tsmMd5BpMXZwtF7ap1_v3l1A'
    }), () => {
        // passport callback function
    }
)