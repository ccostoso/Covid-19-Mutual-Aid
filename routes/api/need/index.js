const router = require("express").Router();

// // IMPORT PASSPORT API ROUTES
const createRoutes = require("./create");
const getNeedsByCommunityRoutes = require("./getNeedsByCommunity");
const getNeedsByUserRoutes = require("./getNeedsByUser");
// const getRepliesRoutes = require("./getReplies");

// // USE PASSPORT API ROUTES
router.use("/create", createRoutes);
router.use("/getNeedsByCommunity", getNeedsByCommunityRoutes);
router.use("/getNeedsByUser", getNeedsByUserRoutes);
// router.use("/getReplies", getRepliesRoutes);

// Export to ../index.js
module.exports = router;
