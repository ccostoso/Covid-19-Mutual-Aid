const router = require("express").Router();

// // IMPORT PASSPORT API ROUTES
const logInRoutes = require("./login");
const logOutRoutes = require("./logout");
const registerRoutes = require("./register");
const userRoutes = require("./user");

// // USE PASSPORT API ROUTES
router.use("/login", logInRoutes);
router.use("/logout", logOutRoutes);
router.use("/register", registerRoutes);
router.use("/user", userRoutes);

// Export to ../index.js
module.exports = router;
