const express = require('express') // routes
const router = express.Router() // routes
const Community = require("../../../db/models/community");
const Skill = require("../../../db/models/skill");

router.get('/:communityId', (req, res, next) => {
    console.log("Getting skills for all members in a community.");
    console.log("REQ PARAMS", req.params);
    console.log("REQ BODY", req.body);

    const communityId = req.params.communityId;

    Community.findOne({ _id: communityId })
        .then(foundCommunity => {
            console.log("FOUND COMMUNITY:", foundCommunity);
            return Skill.find({ havers: { $in: [foundCommunity.members] } });
        }).then(foundSkills => {
            console.log("FOUND SKILLS:", foundSkills);
            return res.json(foundSkills);
        })
})

module.exports = router;