const express = require('express') // routes
const router = express.Router() // routes
const UserPassport = require("../../../db/models/userpassport");
const Needs = require("../../../db/models/need");

router.get('/:userId', (req, res, next) => {
    console.log("Getting needs for all members in a community.");
    console.log("REQ PARAMS", req.params);
    console.log("REQ BODY", req.body);

    const userId = req.params.userId;

    UserPassport.findOne({ _id: userId })
        .then(foundUser => {
            console.log("FOUND USER:", foundUser);
            return Needs.find({ havers: foundUser._id });
        }).then(foundNeeds => {
            console.log("FOUND NEEDS:", foundNeeds);
            return res.json(foundNeeds);
        })
})

module.exports = router;