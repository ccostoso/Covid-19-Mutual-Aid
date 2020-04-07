// Import express Router
const router = require("express").Router();

// Import routes from ./api
const communityRoutes = require("./community");
const accountRoutes = require("./account");

// Routes
router.use("/community", communityRoutes);
router.use("/account", accountRoutes)

// Export to ../index.js
module.exports = router;
