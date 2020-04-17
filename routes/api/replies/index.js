const router = require("express").Router();

// // IMPORT PASSPORT API ROUTES
const createRoutes = require("./create");
const getReplyRoutes = require("./getThread");

// // USE PASSPORT API ROUTES
router.use("/create", createRoutes);
router.use("/getReply", getReplyRoutes);

// Export to ../index.js
module.exports = router;
