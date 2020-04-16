// Import express Router
const router = require("express").Router();

// Import routes from ./api
const communityRoutes = require("./community");
const accountRoutes = require("./account");
const threadRoutes = require("./thread");

// Routes
router.use("/community", communityRoutes);
router.use("/account", accountRoutes);
router.use("/thread", threadRoutes);

// Export to ../index.js
module.exports = router;
