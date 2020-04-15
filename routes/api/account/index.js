const router = require("express").Router();

// Import API routes from ./api/account
const signUpRoutes = require("./signup");
const signInRoutes = require("./signin");
const signOutRoutes = require("./signout");
const verifyRoutes = require("./verify");
// const logInRoutes = require("./login");
// const registerRoutes = require("./register");
console.log('verify func--->',verifyRoutes);

// Use API Routes 
router.use("/signup", signUpRoutes);
router.use("/signin", signInRoutes);
router.use("/signout", signOutRoutes);
//router.use("/verify", verifyRoutes);
// router.use("/login", logInRoutes);
// router.use("/register", registerRoutes);

// Export to ../index.js
module.exports = router;
