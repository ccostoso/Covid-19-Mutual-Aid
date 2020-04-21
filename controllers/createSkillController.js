const Skill = require("../db/models/skill");
const UserPassport = require("../db/models/userpassport");

// Defining methods for the communityController
module.exports = {
    create: function (req, res) {
        console.log("req.body for new reply", req.body);
        const { userId, name } = req.body;

        // ADD VALIDATION
        UserPassport.findOne({ '_id': userId })
            .then(userMatch => {
                console.log("USER MATCH", userMatch);
                if (!userMatch) {
                    return res.json({
                        error: `Sorry, invalid user: ${author}`
                    })
                }
                return userMatch;
            })
            .then(returnedUserMatch => {
                Skill.findOne({ 'name': name })
                    .then(skillMatch => {
                        if (skillMatch) {
                            Promise.all([
                                Skill.findOneAndUpdate({ _id: skillMatch._id },
                                    {
                                        $push: {
                                            havers: returnedUserMatch._id,
                                        }
                                    }),
                                UserPassport.findOneAndUpdate({ _id: returnedUserMatch._id },
                                    {
                                        $push: {
                                            skills: skillMatch._id,
                                        }
                                    })
                            ])
                            .then(updatedResult => {
                                return res.json(updatedResult);
                            })
                        }

                        const newSkill = new Skill({
                            'name': parentThread,
                            'havers': [returnedUserMatch._id]
                        })

                        return newSkill.save();
                        }).then(newSkillResult => {
                            UserPassport.findOneAndUpdate({ _id: returnedUserMatch._id },
                                {
                                    $push: {
                                        skills: newSkillResult._id,
                                    }
                                })
                                .then(updatedUser => {
                                    res.json(updatedUser);
                                })
                        })
            })
    }
};