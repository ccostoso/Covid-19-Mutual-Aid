const router = require("express").Router();

// // IMPORT PASSPORT API ROUTES
const createRoutes = require("./create");
const getThreadRoutes = require("./getThread");
const getThreadsRoutes = require("./getThreads");
const deleteRoutes = require("./delete");

// // USE PASSPORT API ROUTES
router.use("/create", createRoutes);
router.use("/getThread", getThreadRoutes);
router.use("/getThreads", getThreadsRoutes);
router.use("/delete", deleteRoutes);

// Export to ../index.js
module.exports = router;
