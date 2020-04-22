// const express = require('express') // routes
// const router = express.Router() // routes
// const UserPassport = require("../../../db/models/userpassport");

// // this route is just used to get the user basic info
// router.put('/:userId', (req, res, next) => {
//     console.log('===== PUT community!!======');
//     console.log("putPendingPullFromPendingCommunity");
//     console.log("AKA Entry Request Denied")
//     console.log("!!!!!!!!!!!!!!!!!!!!!!!!");
//     console.log("REQ.BODY", req.body);
//     const { avatarLink } = req.body;
//     console.log("!!!!!!!!!!!!!!!!!!!!!!!!");
    
//     const userId = req.params.userId;    

//     UserPassport.findOne({ _id: userId })
//         .then(foundUser => {
//             if (!foundUser) {
//                 return res.json({
//                     "error": "No user found"
//                 })
//             }
//             console.log("FOUND USER", foundUser);
//             return foundUser;
//         })
//         .then(theFoundUser => {
//             return UserPassport.findOneAndUpdate({ _id: theFoundUser._id }, {
//                 $set: { avatar: avatarLink },
//             })
//         }).then(response => {
//             return res.json(response)
//         })
//         .catch(err => {
//             console.log("error:", err);
//         })
// })

// module.exports = router;