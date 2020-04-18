const Reply = require("../db/models/reply");
const Thread = require("../db/models/thread");
const Community = require("../db/models/community");
const UserPassport = require("../db/models/userpassport");

// Defining methods for the communityController
module.exports = {
    create: function (req, res) {
        console.log("req.body for new reply", req.body);
        const { parentThread, body, community, author } = req.body;

        // ADD VALIDATION
        UserPassport.findOne({ 'email': author })
            .then(userMatch => {
                console.log("USER MATCH", userMatch);
                if (!userMatch) {
                    return res.json({
                        error: `Sorry, invalid user: ${author}`
                    })
                }

                const newReply = new Reply({
                    'parentThread': parentThread,
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
                    Community.findOneAndUpdate({ communityName: savedReply.community }, { $push: { threads: savedReply._id } }, { new: true }),
                    UserPassport.findOneAndUpdate({ _id: savedReply.author }, { $push: [{ threads: savedReply._id }, { communities: savedReply.community }] }, { new: true }),
                    Thread.findOneAndUpdate({ _id: savedReply.parentThread }, { $push: { replies: savedReply._id } }, { new: true } )
                ])
            })
            .then(result => {
                console.log('PROMISE.ALL has resolved', result);
                return;
            })
            .catch(err => console.log(err));
    },
};