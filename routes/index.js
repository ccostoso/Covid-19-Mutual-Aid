const path = require("path");
const router = require("express").Router();

// Import API routes from ./api
const apiRoutes = require("./api");

// Use API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Export to ../server.js
module.exports = router;
