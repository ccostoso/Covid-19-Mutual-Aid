const Skill = require("../db/models/skill");
const UserPassport = require("../db/models/userpassport");

// Defining methods for the communityController
module.exports = {
    create: function (req, res) {
        console.log("req.body for new reply", req.body);
        const { haver, name } = req.body;

        // ADD VALIDATION
        UserPassport.findOne({ '_id': haver })
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
                            'name': name,
                            'havers': [returnedUserMatch._id]
                        })

                        return newSkill.save();
                        }).then(newSkillResult => {
                            console.log("NEW SKILL", newSkillResult);
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