const express = require('express') // routes
const router = express.Router() // routes
const Thread = require("../../../db/models/thread");

// this route is just used to get the user basic info
router.get('/:communityName', (req, res, next) => {
	console.log('===== parent community!!======');
	console.log(req.body);
	
	console.log("req.params.threadId", req.params.communityName);
	const communityName = req.params.communityName;

	Thread.find({ community: communityName }).sort({ date: -1 })
		.then(response => {
			console.log("Community.findOne response", response);
			return res.json(response);
		}).catch(err => {
			console.log("error:", err);
		})
})

module.exports = router;