// Import express Router
const router = require("express").Router();

// Import routes from ./api
const communityRoutes = require("./community");
const accountRoutes = require("./account");
const threadRoutes = require("./thread");
const replyRoutes = require("./replies");
const skillRoutes = require("./skill");
const needRoutes = require("./need");

// Routes
router.use("/community", communityRoutes);
router.use("/account", accountRoutes);
router.use("/thread", threadRoutes);
router.use("/replies", replyRoutes);
router.use("/skill", skillRoutes);
router.use("/need", needRoutes);

// Export to ../index.js
module.exports = router;
