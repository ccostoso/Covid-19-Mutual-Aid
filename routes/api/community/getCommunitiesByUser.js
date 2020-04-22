const express = require('express') // routes
const router = express.Router() // routes
const Community = require("../../../db/models/community");
const UserPassport = require("../../../db/models/userpassport");
const mongoose = require("mongoose");

// this route is just used to get the user basic info
router.get('/:userId', (req, res, next) => {
    console.log('===== find community by user!!======');
    console.log(req.body);
    const userId = req.params.userId;
    
    const usersCommunities = UserPassport.findOne({ _id: userId }).map(doc => { 
        doc.community
    })

    UserPassport.findOne({ _id: userId })
        .then(foundUser => {
            if (!foundUser) {
                res.json({
                    error: "No such user found"
                })
            }
            console.log("Found user communities:", foundUser.communities);
            
            // We need to convert _id values from simple strings to values that Mongoose/MongoDB
            // can recognize as _id properties.
            let arr = foundUser.communities.map(ele => new mongoose.Types.ObjectId(ele));
            console.log("ARR", arr);
            return arr;
        }).then(returnedArr => {
            return Community.find({ _id: { $in: returnedArr } }
            ).limit(10).sort({ date: -1 })
                .then(response => {
                    console.log("Community.find response", response);
                    return res.json(response);
                }).catch(err => {
                    console.log("error:", err);
                })
        })
})

module.exports = router;