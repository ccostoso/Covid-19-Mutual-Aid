const express = require('express') // routes
const router = express.Router() // routes
const Thread = require("../../../db/models/thread");

// this route is just used to get the user basic info
router.get('/:community', (req, res, next) => {
	console.log('===== parent community!!======');
	console.log(req.body);
	
	console.log("req.params.threadId", req.params.community);
	const community = req.params.community;

	Thread.findAll({ community: community }).sort({ date: -1 })
		.then(response => {
			console.log("Community.findOne response", response);
			return res.json(response.threads);
		}).catch(err => {
			console.log("error:", err);
		})
})

module.exports = router;