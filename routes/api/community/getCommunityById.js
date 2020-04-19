const express = require('express') // routes
const router = express.Router() // routes
const Community = require("../../../db/models/community");

// this route is just used to get the user basic info
router.get('/:communityId', (req, res, next) => {
	console.log('===== community!!======');
	console.log(req.body);
	
	console.log("req.params.communityId", req.params.communityId);
	const communityId = req.params.communityId;

	Community.findOne({ _id: communityId })
		.then(response => {
			console.log("Community.findOne response", response);
			return res.json(response);
		}).catch(err => {
			console.log("error:", err);
		})
})

module.exports = router;