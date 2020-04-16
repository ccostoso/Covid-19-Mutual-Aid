const router = require("express").Router();
const createController = require("../../../controllers/createController");

// Matches with "/api/community"
router.route("/")
  .post(createController.create);

module.exports = router;
