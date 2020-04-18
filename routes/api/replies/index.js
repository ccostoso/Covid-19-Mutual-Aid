const router = require("express").Router();

// // IMPORT PASSPORT API ROUTES
const createRoutes = require("./create");
const getReplyRoutes = require("./getReply");
const getRepliesRoutes = require("./getReplies");

// // USE PASSPORT API ROUTES
router.use("/create", createRoutes);
router.use("/getReply", getReplyRoutes);
router.use("/getReplies", getRepliesRoutes);

// Export to ../index.js
module.exports = router;
