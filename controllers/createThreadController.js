const Thread = require("../db/models/thread");
const Community = require("../db/models/community");
const UserPassport = require ("../db/models/userpassport");

// Defining methods for the communityController
module.exports = {
  create: function (req, res) {
    const { title, body, community: communityName, author } = req.body;

    // ADD VALIDATION
    Community.findOne({ 'communityName': communityName })
    .then(communityMatch => {

      return UserPassport.findOne({ '_id': author });
    }).then(userMatch => {
        console.log("test???")
        console.log("USER MATCH", userMatch);
        if (!userMatch) {
          return res.json({
            error: `Sorry, invalid user: ${author}`
          })
        }

        const newThread = new Thread({
          'title': title,
          'body': body,
          'community': communityName,
          'author': userMatch._id,
          'authorName': userMatch.displayName,
        })
        
        return newThread.save();
      })        
      .then(savedThread => {
        console.log("SAVED THREAD", savedThread);
        return Promise.all([
          Community.findOneAndUpdate({ communityName: savedThread.communityName }, { $push: { threads: savedThread._id } }, { new: true }),
          UserPassport.findOneAndUpdate({ _id: savedThread.author }, { $push: { threads: savedThread._id } }, { new: true })
        ])
      })
      .then(result => {
        console.log('PROMISE.ALL has resolved', result);
        return Thread.find({ community: communityName }).limit(10).sort({ date: -1 });
      }).then(updatedCommunity => {
        return res.json(updatedCommunity);
      })
    .catch(err => console.log(err));
  },
};