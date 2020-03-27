// Import express Router
const router = require("express").Router();

// Import routes from ./api
const communityRoutes = require("./community");
const userRoutes = require("./user");

// Routes
router.use("/community", communityRoutes);
router.use("/user", userRoutes);

// Export to ../index.js
module.exports = router;
