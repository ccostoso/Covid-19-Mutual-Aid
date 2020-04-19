const router = require("express").Router();

// // IMPORT PASSPORT API ROUTES
const createRoutes = require("./create");
const getCommunityRoutes = require("./getCommunity");
const getCommunityByIdRoutes = require("./getCommunityById");

// // USE PASSPORT API ROUTES
router.use("/create", createRoutes);
router.use("/getCommunity", getCommunityRoutes);
router.use("/getCommunityById", getCommunityByIdRoutes);

// Export to ../index.js
module.exports = router;
