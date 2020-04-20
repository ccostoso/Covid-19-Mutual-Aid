const express = require('express') // routes
const router = express.Router() // routes
const Community = require("../../../db/models/community");
const UserPassport = require("../../../db/models/userpassport");

// this route is just used to get the user basic info
router.put('/:communityName', (req, res, next) => {
    console.log('===== PUT community!!======');
    console.log(req.body);
    const { pendingUser } = req.body;

    console.log("req.params.communityName", req.params.communityName);
    const communityName = req.params.communityName;

    UserPassport.findOne({ _id: pendingUser })
        .then(foundUser => {
            Community.findOneAndUpdate({ communityName: communityName }, {
                $pull: { pending: foundUser.data._id },
                $push: { member: foundUser.data._id },
            }, { new: true })
                .then(updatedCommunity => {
                    console.log("Community.findOne response", response);
                    res.json(updatedCommunity);
                })
                .catch(err => {
                    console.log("error:", err);
                })
        })
})

module.exports = router;