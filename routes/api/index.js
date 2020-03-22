const router = require("express").Router();
const communityRoutes = require("./community");
const userRoutes = require("./user");

// Book routes
router.use("/community", communityRoutes);
router.use("/user", userRoutes);

module.exports = router;
