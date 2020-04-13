const express = require('express') // routes
const router = express.Router() // routes

router.post('/', (req, res) => {
	console.log("request:", req);
	if (req.user) {
		req.session.destroy()
		res.clearCookie('connect.sid') // clean up!
		return res.json({ msg: 'logging you out' })
	} else {
		return res.json({ msg: 'no user to log out!' })
	}
})

module.exports = router;