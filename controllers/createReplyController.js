const Reply = require("../db/models/reply");
const Thread = require("../db/models/thread");
const Community = require("../db/models/community");
const UserPassport = require("../db/models/userpassport");

// Defining methods for the communityController
module.exports = {
    create: function (req, res) {
        const { threadId, body, community, author } = req.body;

        // ADD VALIDATION
        UserPassport.findOne({ 'email': author })
            .then(userMatch => {
                console.log("USER MATCH", userMatch);
                if (!userMatch) {
                    return res.json({
                        error: `Sorry, invalid user: ${author}`
                    })
                }

                const newReply = new Thread({
                    'parentThread': threadId,
                    'body': body,
                    'community': community,
                    'author': userMatch._id,
                    'authorName': userMatch.displayName,
                })

                return newReply.save();
            })
            .then(savedReply => {
                console.log("SAVED REPLY", savedReply);
                return Promise.all([
                    Community.findOneAndUpdate({ communityName: savedThread.community }, { $push: { threads: savedThread._id } }, { new: true }),
                    UserPassport.findOneAndUpdate({ _id: savedThread.author }, { $push: { threads: savedThread._id } }, { new: true }),
                    Thread.findOneAndUpdate({ _id: savedThread.parentThread },{ $push: { childThreads: savedThread._id } }, { new: true} )
                ])
            })
            .then(result => {
                console.log('PROMISE.ALL has resolved', result);
                return;
            })
            .catch(err => console.log(err));
    },
};