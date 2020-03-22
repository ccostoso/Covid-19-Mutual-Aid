const router = require("express").Router();
const communityController = require("../../controllers/communityController");

// Matches with "/api/community"
router.route("/")
  .get(communityController.findAll)
  .post(communityController.create);

// Matches with "/api/community/:id"
router
  .route("/:id")
  .get(communityController.findById)
  .put(communityController.update)
  .delete(communityController.remove);

module.exports = router;
