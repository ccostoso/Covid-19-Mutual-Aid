const express = require('express') // routes
const router = express.Router() // routes
const Community = require("../../../db/models/community");
const UserPassport = require("../../../db/models/userpassport");

// this route is just used to get the user basic info
router.put('/:communityName', (req, res, next) => {
    console.log('===== PUT community!!======');
    console.log("putNonUserToPendingCommunity");
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log("REQ.BODY", req.body);
    const { pendingUser } = req.body;
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log("pendingUser", pendingUser);

    console.log("req.params.communityName", req.params.communityName);
    const communityName = req.params.communityName;

    // is the notAdminUser in the community's pending array already?
    // if so, put them in pending array
    // else don't do anything
    // if an admin is looking at this
    // if the req
    
    UserPassport.findOne({ _id: pendingUser })
        .then(foundUser => {
            console.log("FOUND USER", foundUser);
            return foundUser;
        })
        .then(theFoundUser => {
            console.log("Again, the found user:", theFoundUser);
            return Community.findOne({ communityName: communityName });
        }).then(foundCommunity => {
            return Promise.all([
                Community.findOneAndUpdate({ communityName: communityName }, {
                    $push: { pending: pendingUser },
                }, { new: true }),
                UserPassport.findOneAndUpdate({ _id: pendingUser }, {
                    $push: { pending: foundCommunity._id },
                })
            ])
            .then(promiseAllResult => {
                console.log("PROMISE.ALL", promiseAllResult);
                return Community.findOne({ communityName: communityName })  
            })
            .then(updatedCommunity => {
                return res.json(updatedCommunity);
            })
            .catch(err => {
                console.log("error:", err);
            })
        })
})

module.exports = router;