const router = require("express").Router();
const createThreadController = require("../../../controllers/createThreadController");

// Matches with "/api/community"
router.route("/")
  .post(createThreadController.create);

module.exports = router;
