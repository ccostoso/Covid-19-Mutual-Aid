const router = require("express").Router();

// // IMPORT PASSPORT API ROUTES
const createRoutes = require("./create");
const getCommunityRoutes = require("./getCommunity");
const getCommunitiesRoutes = require("./getCommunities");
const getCommunityByIdRoutes = require("./getCommunityById");
const putCommunityRoutes = require("./putCommunity");
const putPendingCommunityRoutes = require("./putPendingCommunity");

// // USE PASSPORT API ROUTES
router.use("/create", createRoutes);
router.use("/getCommunity", getCommunityRoutes);
router.use("/getCommunities", getCommunitiesRoutes);
router.use("/getCommunityById", getCommunityByIdRoutes);
router.use("/putCommunity", putCommunityRoutes);
router.use("/putPendingCommunity", putPendingCommunityRoutes);

// Export to ../index.js
module.exports = router;
