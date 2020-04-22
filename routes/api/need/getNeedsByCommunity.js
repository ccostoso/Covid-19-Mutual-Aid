const express = require('express') // routes
const router = express.Router() // routes
const Community = require("../../../db/models/community");
const Need = require("../../../db/models/need");

router.get('/:communityId', (req, res, next) => {
    console.log("Getting skills for all members in a community.");
    console.log("REQ PARAMS", req.params);
    console.log("REQ BODY", req.body);

    const communityId = req.params.communityId;

    Community.findOne({ _id: communityId })
        .then(foundCommunity => {
            console.log("FOUND COMMUNITY:", foundCommunity);
            return Need.find({ havers: { $in: [foundCommunity.members] } });
        }).then(foundNeeds => {
            console.log("FOUND SKILLS:", foundNeeds);
            return res.json(foundNeeds);
        })
})

module.exports = router;