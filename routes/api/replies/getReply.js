const express = require('express') // routes
const router = express.Router() // routes
const Reply = require("../../../db/models/thread");

// this route is just used to get the user basic info
router.get('/:replyId', (req, res, next) => {
	console.log('===== thread!!======');
	console.log(req.body);
	
	console.log("req.params.replyId", req.params.replyId);
	const threadId = req.params.threadId;

	Reply.findOne({ _id: replyId })
		.then(response => {
			console.log("Reply.findOne response", response);
			return res.json(response);
		}).catch(err => {
			console.log("error:", err);
		})
})

module.exports = router;