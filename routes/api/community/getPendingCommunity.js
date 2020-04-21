const express = require('express') // routes
const router = express.Router() // routes
const Community = require("../../../db/models/community");
const UserPassport = require("../../../db/models/userpassport");

// this route is just used to get the user basic info
router.get('/:communityName', (req, res, next) => {
    console.log('===== community!!======');
    console.log(req.body);

    console.log("req.params.communityId", req.params.communityId);
    const communityName = req.params.communityName;
    Community.findOne({ communityName })
        .then(communityResponse => {
            console.log("Passing to UserPassport.find call");
            return communityResponse;
        })
        .then(theCommunityResponse => {
            console.log("Community in question:", theCommunityResponse);
            UserPassport.find({ pending: theCommunityResponse._id })
            .then(response => {
                console.log("UserPassport.find response", response);
                return res.json(response);
            }).catch(err => {
                console.log("error:", err);
            })
        })



})

module.exports = router;