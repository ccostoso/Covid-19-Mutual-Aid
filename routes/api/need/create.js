const router = require("express").Router();
const createNeedController = require("../../../controllers/createNeedController");

// Matches with "/api/replies/"
router.route("/")
  .post(createNeedController.create);

module.exports = router;
