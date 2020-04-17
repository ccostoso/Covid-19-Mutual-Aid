const express = require('express') // routes
const router = express.Router() // routes
const Community = require("../../../db/models/community");

// this route is just used to get the user basic info
router.get('/:communityName', (req, res, next) => {
	console.log('===== community!!======');
	console.log(req.body);
	
	console.log("req.params.communityName", req.params.communityName);
	const communityName = req.params.communityName;

	Community.findOne({ communityName: communityName }).sort({ date: -1 })
		.then(response => {
			console.log("Community.findOne response", response);
			return res.json(response);
		}).catch(err => {
			console.log("error:", err);
		})
})

module.exports = router;