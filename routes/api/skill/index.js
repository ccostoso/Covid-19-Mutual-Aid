const router = require("express").Router();

// // IMPORT PASSPORT API ROUTES
const createRoutes = require("./create");
const getSkillsByCommunityRoutes = require("./getSkillsByCommunity");
const getSkillsByUserRoutes = require("./getSkillsByUser");
// const getRepliesRoutes = require("./getReplies");

// // USE PASSPORT API ROUTES
router.use("/create", createRoutes);
router.use("/getSkillsByCommunity", getSkillsByCommunityRoutes);
router.use("/getSkillsByUser", getSkillsByUserRoutes);
// router.use("/getReplies", getRepliesRoutes);

// Export to ../index.js
module.exports = router;
