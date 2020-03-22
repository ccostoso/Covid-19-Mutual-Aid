const router = require("express").Router();
const apartmentRoutes = require("./apartment");
const userRoutes = require("./user");

// Book routes
router.use("/apartment", apartmentRoutes);
router.use("/user", userRoutes);

module.exports = router;
