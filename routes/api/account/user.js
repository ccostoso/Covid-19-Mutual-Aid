const express = require('express') // routes
const router = express.Router() // routes

// this route is just used to get the user basic info
router.get('/', (req, res, next) => {
	console.log('===== user!!======')
	console.log(req.user)
	if (req.user) {
		return res.json({ user: req.user })
	} else {
		return res.json({ user: null })
	}
})
