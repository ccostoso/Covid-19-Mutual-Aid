const router = require("express").Router();

// Import API routes from ./api/account
const signUpRoutes = require("./signup");
const signInRoutes = require("./signin");
const signOutRoutes = require("./signout");
// const logInRoutes = require("./login");
// const registerRoutes = require("./register");

// Use API Routes
router.use("/signup", signUpRoutes);
router.use("/signin", signInRoutes);
router.use("/signout", signOutRoutes);
// router.use("/login", logInRoutes);
// router.use("/register", registerRoutes);

// Export to ../index.js
module.exports = router;
