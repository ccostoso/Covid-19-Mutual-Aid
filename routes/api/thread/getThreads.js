const express = require('express') // routes
const router = express.Router() // routes
const Thread = require("../../../db/models/thread");
const Community = require("../../../db/models/community");

// this route is just used to get the user basic info
router.get('/:threadId', (req, res, next) => {
	console.log('===== thread!!======');
	console.log(req.body);
	
	console.log("req.params.threadId", req.params.communityId);
	const threadId = req.params.communityId;

	Community.findOne({ _id: threadId })
		.then(response => {
			console.log("Community.findOne response", response);
			return res.json(response.threads);
		}).catch(err => {
			console.log("error:", err);
		})
})

module.exports = router;