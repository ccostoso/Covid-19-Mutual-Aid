const router = require("express").Router();
const createReplyController = require("../../../controllers/createReplyController");

// Matches with "/api/replies/"
router.route("/")
  .post(createReplyController.create);

module.exports = router;
