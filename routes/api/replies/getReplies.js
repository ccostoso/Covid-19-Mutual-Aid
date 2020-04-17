const express = require('express') // routes
const router = express.Router() // routes
const Reply = require("../../../db/models/thread");

// this route is just used to get the user basic info
router.get('/:parentThreadId', (req, res, next) => {
	console.log('===== thread!!======');
	console.log(req.body);
	
	console.log("req.params.replyId", req.params.parentThreadId);
	const threadId = req.params.parentThreadId;

	Reply.findAll({ parentThread: parentThreadId })
		.then(response => {
			console.log("Reply.findAll response", response);
			return res.json(response);
		}).catch(err => {
			console.log("error:", err);
		})
})

module.exports = router;