const router = require("express").Router();

// // IMPORT PASSPORT API ROUTES
const createRoutes = require("./create");
const getCommunityRoutes = require("./getCommunity");
const getCommunityByIdRoutes = require("./getCommunityById");
const putCommunityRoutes = require("./putCommunity");

// // USE PASSPORT API ROUTES
router.use("/create", createRoutes);
router.use("/getCommunity", getCommunityRoutes);
router.use("/getCommunityById", getCommunityByIdRoutes);
router.use("/putCommunity", putCommunityRoutes);

// Export to ../index.js
module.exports = router;
