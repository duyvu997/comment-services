const commentController = require("../comment/controller");
const Router = require("express-promise-router");
const router = new Router();

router.get("/:postId/comments", commentController.getAllComments);
router.post("/:postId/comments", commentController.addComment);

module.exports = router;
