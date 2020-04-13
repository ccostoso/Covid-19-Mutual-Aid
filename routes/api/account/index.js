const router = require("express").Router();

// // Import API routes from ./api/account
// const signUpRoutes = require("./signup");
// const signInRoutes = require("./signin");
// const signOutRoutes = require("./signout");
// const verifyRoutes = require("./verify");
// // IMPORT PASSPORT API ROUTES
const logInRoutes = require("./login");
const logOutRoutes = require("./logout");
const registerRoutes = require("./register");
const userRoutes = require("./user");

// // Use API Routes
// router.use("/signup", signUpRoutes);
// router.use("/signin", signInRoutes);
// router.use("/signout", signOutRoutes);
// router.use("/verify", verifyRoutes);
// // USE PASSPORT API ROUTES
router.use("/login", logInRoutes);
router.use("/logout", logOutRoutes);
router.use("/register", registerRoutes);
router.use("/user", userRoutes);

// Export to ../index.js
module.exports = router;
