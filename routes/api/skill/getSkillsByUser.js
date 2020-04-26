const express = require('express') // routes
const router = express.Router() // routes
const UserPassport = require("../../../db/models/userpassport");
const Skill = require("../../../db/models/skill");

router.get('/:userId', (req, res, next) => {
    console.log("Getting skills for all members in a community.");
    console.log("REQ PARAMS", req.params);
    console.log("REQ BODY", req.body);

    const userId = req.params.userId;

    UserPassport.findOne({ _id: userId })
        .then(foundUser => {
            console.log("FOUND USER:", foundUser);
            return Skill.find({ havers: foundUser._id });
        }).then(foundSkills => {
            console.log("FOUND SKILLS:", foundSkills);
            return res.json(foundSkills);
        })
})

module.exports = router;