const express = require('express') // routes
const router = express.Router() // routes
const UserPassport = require("../../../db/models/userpassport");

// this route is just used to get the user basic info
router.get('/:id', (req, res, next) => {
	console.log('===== user!!======');
	console.log(req.body);
	
	console.log("req.params.id", req.params.id);
	const id = req.params.id;

	UserPassport.findOne({ _id: id })
		.then(response => {
			if (!response) {
				return res.json({
					error: "No user found."
				})
			}

			console.log("UserPassport.findOne response", response);
			return res.json(response);
		}).catch(err => {
			console.log("error:", err);
		})
})

module.exports = router;