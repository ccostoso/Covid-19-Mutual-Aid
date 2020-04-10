const express = require('express') // routes
const router = express.Router() // routes
const passport = require('../passport') // controller

const UserSession = require("../models/usersessionpassport");
const User = require("../models/userpassport");

module.exports = {
	signIn: function(req, res) {
		
	}
}

router.post(
	'/login',
	function(req, res, next) {
		console.log(req.body)
		console.log('================')
		next()
	},
	passport.authenticate('local'),
	(req, res) => {
		console.log('POST to /login')
		const user = JSON.parse(JSON.stringify(req.user)) // hack
		const cleanUser = Object.assign({}, user)
		if (cleanUser.local) {
			console.log(`Deleting ${cleanUser.local.password}`)
			delete cleanUser.local.password
		}
		res.json({ user: cleanUser })
	}
)