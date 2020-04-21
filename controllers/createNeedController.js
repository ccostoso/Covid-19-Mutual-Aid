const Need = require("../db/models/need");
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
                Need.findOne({ 'name': name })
                    .then(needMatch => {
                        if (needMatch) {
                            Promise.all([
                                Need.findOneAndUpdate({ _id: needMatch._id },
                                    {
                                        $push: {
                                            havers: returnedUserMatch._id,
                                        }
                                    }),
                                UserPassport.findOneAndUpdate({ _id: returnedUserMatch._id },
                                    {
                                        $push: {
                                            needs: needMatch._id,
                                        }
                                    })
                            ])
                            .then(updatedResult => {
                                return res.json(updatedResult);
                            })
                        }

                        const newNeed = new Need({
                            'name': parentThread,
                            'havers': [returnedUserMatch._id]
                        })

                        return newNeed.save();
                        }).then(newNeedResult => {
                            UserPassport.findOneAndUpdate({ _id: returnedUserMatch._id },
                                {
                                    $push: {
                                        needs: newNeedResult._id,
                                    }
                                })
                                .then(updatedUser => {
                                    res.json(updatedUser);
                                })
                        })
            })
    }
};