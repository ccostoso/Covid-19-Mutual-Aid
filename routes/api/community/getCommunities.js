const express = require('express') // routes
const router = express.Router() // routes
const Community = require("../../../db/models/community");

// this route is just used to get the user basic info
router.get('/', (req, res, next) => {
	console.log('===== community!!======');
	console.log(req.body);
	
	Community.find({}).limit(10).sort({ date: -1})
		.then(response => {
			console.log("Community.find response", response);
			return res.json(response);
		}).catch(err => {
			console.log("error:", err);
		})
})

module.exports = router;