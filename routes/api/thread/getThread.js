const express = require('express') // routes
const router = express.Router() // routes
const Thread = require("../../../db/models/thread");

// this route is just used to get the user basic info
router.get('/:threadId', (req, res, next) => {
	// console.log('===== thread!!======');
	// console.log(req.body);
	
	// console.log("req.params.threadId", req.params.threadId);
	const threadId = req.params.threadId;

	Thread.findOne({ _id: threadId })
		.then(response => {
			console.log("Thread.findOne response", response);
			return res.json(response);
		}).catch(err => {
			console.log("error:", err);
		})
})

module.exports = router;