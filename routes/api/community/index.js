const router = require("express").Router();

// // IMPORT PASSPORT API ROUTES
const createRoutes = require("./create");
const getCommunityRoutes = require("./getCommunity");
const getCommunitiesRoutes = require("./getCommunities");
const getCommunityByIdRoutes = require("./getCommunityById");
const getPendingCommunityRoutes = require("./getPendingCommunity");
const putCommunityRoutes = require("./putCommunity");
const putPendingToUserCommunityRoutes = require("./putPendingToUserCommunity");
const putPendingPullFromPendingCommunityRoutes = require("./putPendingPullFromPendingCommunity");
const putNonUserToPendingCommunityRoutes = require("./putNonUserToPendingCommunity");

// // USE PASSPORT API ROUTES
router.use("/create", createRoutes);
router.use("/getCommunity", getCommunityRoutes);
router.use("/getCommunities", getCommunitiesRoutes);
router.use("/getCommunityById", getCommunityByIdRoutes);
router.use("/getPendingCommunity", getPendingCommunityRoutes);
router.use("/putCommunity", putCommunityRoutes);
router.use("/putPendingToUserCommunity", putPendingToUserCommunityRoutes);
router.use("/putPendingPullFromPendingCommunity", putPendingPullFromPendingCommunityRoutes);
router.use("/putNonUserToPendingCommunity", putNonUserToPendingCommunityRoutes);

// Export to ../index.js
module.exports = router;
