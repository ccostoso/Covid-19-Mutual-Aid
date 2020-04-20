const Thread = require("../db/models/thread");
const Community = require("../db/models/community");
const UserPassport = require ("../db/models/userpassport");

// Defining methods for the communityController
module.exports = {
  create: function (req, res) {
    const { title, body, community, author } = req.body;

    // ADD VALIDATION
    Community.findOne({ 'communityName': community })
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
          'community': community,
          'author': userMatch._id,
          'authorName': userMatch.displayName,
        })
        
        return newThread.save();
      })        
      .then(savedThread => {
        console.log("SAVED THREAD", savedThread);
        return Promise.all([
          Community.findOneAndUpdate({ communityName: savedThread.community }, { $push: { threads: savedThread._id } }, { new: true }),
          UserPassport.findOneAndUpdate({ _id: savedThread.author }, { $push: { threads: savedThread._id } }, { new: true })
        ])
      })
      .then(result => {
        console.log('PROMISE.ALL has resolved', result);
        return res.json(result);
      })
    .catch(err => console.log(err));
  },
};