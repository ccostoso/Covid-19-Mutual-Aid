const router = require("express").Router();
const createSkillController = require("../../../controllers/createSkillController");

// Matches with "/api/replies/"
router.route("/")
  .post(createSkillController.create);

module.exports = router;
