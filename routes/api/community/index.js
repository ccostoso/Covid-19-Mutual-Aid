const router = require("express").Router();

// // IMPORT PASSPORT API ROUTES
const createRoutes = require("./create");
const getCommunityRoutes = require("./getCommunity");

// // USE PASSPORT API ROUTES
router.use("/create", createRoutes);
router.use("/getCommunity", getCommunityRoutes);

// Export to ../index.js
module.exports = router;
