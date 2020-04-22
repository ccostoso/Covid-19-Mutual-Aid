const express = require('express') // routes
const router = express.Router() // routes
const Community = require("../../../db/models/community");
const Skill = require("../../../db/models/skill");
const mongoose = require("mongoose");

router.get('/:communityId', (req, res, next) => {
    console.log("Getting skills for all members in a community.");
    console.log("REQ PARAMS", req.params);
    console.log("REQ BODY", req.body);

    const communityId = req.params.communityId;

    Community.findOne({ _id: communityId })
        .then(foundCommunity => {
            console.log("FOUND COMMUNITY:", foundCommunity);
            const foundCommunityMembers = foundCommunity.members;
            console.log("FOUND COMMUNITY MEMBERS:", foundCommunityMembers);
            const arr = foundCommunityMembers.map(ele => new mongoose.Types.ObjectId(ele))
            console.log("FOUND COMMUNITY NEW ARR:", arr);
            console.log("FOUND COMMUNITY NEW ARR[0]:", arr[0]);
            // return Skill.find({ havers: arr[0] });
            return Skill.find({ havers: { $in: arr } });
        }).then(response => {
            console.log("FOUND SKILLS:", response);
            return res.json(response);
        })
})

module.exports = router;