const router = require("express").Router();
const userSessionController = require("../../../controllers/userSessionController");

// Matches with "/"
router.route("/")
  .get(userSessionController.findAll)
  .post(userSessionController.signIn);

module.exports = router;
