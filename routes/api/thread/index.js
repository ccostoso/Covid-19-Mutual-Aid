const router = require("express").Router();

// // IMPORT PASSPORT API ROUTES
const createRoutes = require("./create");
const getThreadRoutes = require("./getThread");

// // USE PASSPORT API ROUTES
router.use("/create", createRoutes);
router.use("/getThread", getThreadRoutes);

// Export to ../index.js
module.exports = router;
