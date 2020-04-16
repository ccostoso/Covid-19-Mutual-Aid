const Community = require("../db/models/community");

// Defining methods for the communityController
module.exports = {
  create: function (req, res) {
    const { communityName, creator, description } = req.body;

    // ADD VALIDATION
    Community.findOne({ 'communityName': communityName }, (err, communityMatch) => {
      console.log("COMMUNITY MATCH", communityMatch)
      if (communityMatch) {
        return res.json({
          error: `Sorry, already an account with the community name: ${communityName}`
        })
      }
      const newCommunity = new Community({
        'communityName': communityName,
        'creator': creator,
        'description': description,
      })
      console.log("NEW COMMUNITY RESPONSE", newCommunity)
      newCommunity.save((err, savedCommunity) => {
        if (err) {
          console.log('error!!!!', err)
          return res.json(err);
        }
        console.log("I MADE IT", savedCommunity)
        return res.json(savedCommunity)
      })
    })
  },
};