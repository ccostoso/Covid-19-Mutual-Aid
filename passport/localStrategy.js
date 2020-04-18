const User = require('../db/models/userpassport');
const LocalStrategy = require('passport-local').Strategy;

const strategy = new LocalStrategy(
	{
        usernameField: 'email',
        passwordField: 'password',
	},
	function(username, password, done) {
		User.findOne({ 'email': username }, (err, userMatch) => {
			if (err) {
				return done(err)
			}
			if (!userMatch) {
				return done(null, false, { message: 'Incorrect username' })
			}
			if (!userMatch.validPassword(password)) {
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, userMatch)
		});
	});

module.exports = strategy;
