const express = require('express') // routes
const router = express.Router() // routes
const Reply = require("../../../db/models/reply");

// this route is just used to get the user basic info
router.get('/:parentThreadId', (req, res, next) => {
	console.log('===== reply!!======');
	console.log(req.body);
	
	console.log("req.params.replyId", req.params.parentThreadId);
	const parentThreadId = req.params.parentThreadId;

	Reply.find({ parentThread: parentThreadId })
		.then(response => {
			console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
			console.log("Reply.find response", response);
			return res.json(response);
		}).catch(err => {
			console.log("error:", err);
		})
})

module.exports = router;