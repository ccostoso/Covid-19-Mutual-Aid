const Community = require("../db/models/community");
const UserPassport = require("../db/models/userpassport");

// Defining methods for the communityController
module.exports = {
  create: function (req, res) {
    const { communityName, creator, description } = req.body;

    // ADD VALIDATION
    Community.findOne({ 'communityName': communityName }, async (err, communityMatch) => {
      console.log("COMMUNITY MATCH", communityMatch);
      if (communityMatch) {
        return res.json({
          error: `Sorry, already an communit with the name: ${communityName}`
        });
      };

      const newCommunity = new Community({
        'communityName': communityName,
        'creator': creator,
        'description': description,
        'admins': [creator],
        'members': [creator],
      });
      console.log("NEW COMMUNITY RESPONSE", newCommunity);

      const response = await newCommunity.save();

      Promise.all([
        UserPassport.findOneAndUpdate({ _id: response.creator }, { $push: { communities: response._id } }, { new: true }),
        Community.find({ _id: response._id }),
      ])
      .then(result => {
        console.log('PROMISE.ALL has resolved', result);
        return res.json(result);
      })
    })
    .catch(err => console.log(err));
  },
};