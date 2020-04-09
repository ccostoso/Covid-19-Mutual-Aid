const router = require("express").Router();
const userSessionController = require("../../../controllers/userSessionController");

// Matches with "/"
router.route("/")
  .get(userSessionController.findAll)
  .post(userSessionController.signIn);

// // Matches with "/:id"
// router
//   .route("/:id")
//   .get(userSessionController.signOut)
//   .put(userSessionController.update)
//   .delete(userSessionController.remove);

module.exports = router;
