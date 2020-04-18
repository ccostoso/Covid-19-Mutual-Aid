const router = require("express").Router();
const userSessionController = require("../../../controllers/userSessionController");

// Matches with "/"
router.route("/")
  .get(userSessionController.signOut);

// // Matches with "/:id"
// router
//   .route("/:id")
//   .get(userSessionController.findById)
//   .put(userSessionController.update)
//   .delete(userSessionController.remove);

module.exports = router;
