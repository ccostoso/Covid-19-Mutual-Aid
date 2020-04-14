const express = require('express') // routes
const router = express.Router() // routes
const passport = require('../../../passport') // controller

// Matches with "/login"
// router.post(
// 	'/',
// 	function(req, res, next) {
// 		console.log(req.body)
// 		console.log('================')
// 		next()
// 	},
// 	passport.authenticate('local'),
// 	(req, res) => {
// 		console.log('POST to /login')
// 		const user = JSON.parse(JSON.stringify(req.user)) // hack
// 		const cleanUser = Object.assign({}, user)
// 		if (cleanUser.local) {
// 			console.log(`Deleting ${cleanUser.local.password}`)
// 			delete cleanUser.local.password
// 		}
// 		res.json({ user: cleanUser })
// 	}
// )

// localhost:3000/api/account/login/
router.post('/login', passport.authenticate('local', {
		successRedirect: '/home',
		failureRedirect: '/'
	}));
	// passport.authenticate('local', function (err, user, info) {
	// 	console.log('passport auth', err, user);
	// 	console.log("!!!!!!!!!!!INFO!!!!!", info)
	// 	if (err) { console.log('error is', err); return next(err); }
	// 	if (!user) { return res.redirect('/'); }
	// 	req.logIn(user, function (err) {
	// 		if (err) { 
	// 			console.log("ERROR WITH REQ.LOGIN")
	// 			return next(err); 
	// 		}
	// 		// return res.json(user);
	// 		// console.log("ROUTE LOGIN.JS", user)
	// 		return res.redirect('/home/' + user._id);
	// 		// return res.redirect('/home');
	// 	});
	// })(req, res, next);
// });


module.exports = router;
