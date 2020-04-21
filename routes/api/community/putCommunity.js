const express = require('express') // routes
const router = express.Router() // routes
const Community = require("../../../db/models/community");
const UserPassport = require("../../../db/models/userpassport");

// this route is just used to get the user basic info
router.put('/:communityName', (req, res, next) => {
    console.log('===== PUT community!!======');
    console.log(req.body);
    const update = req.body;
    const { description, headerImage, newAdministrator } = update;
    let newAdminId;

    console.log("req.params.communityName", req.params.communityName);
    const communityName = req.params.communityName;

    if (newAdministrator) {
        UserPassport.findOne({ email: newAdministrator })
            .then(foundUser => {
                Community.findOneAndUpdate({ communityName: communityName }, { 
                    $set: { description: description, headerImage: headerImage },
                    $push: { admins: foundUser.data._id } 
                }, { new: true })
                    .then(updatedCommunity => {
                        console.log("Community.findOne response", response);
                        res.json(updatedCommunity);
                    })
                    .catch(err => {
                        console.log("error:", err);
                    })
            })
    } else {
        UserPassport.findOne({ email: newAdministrator })
        .then(foundUser => {
            Community.findOneAndUpdate({ communityName: communityName }, { 
                $set: { description: description, headerImage: headerImage },
            }, { new: true })
                .then(updatedCommunity => {
                    console.log("Community.findOne response", response);
                    res.json(updatedCommunity);
                })
                .catch(err => {
                    console.log("error:", err);
                })
        })
    }
})

module.exports = router;