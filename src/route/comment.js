const commentController = require("../comment/controller");
const Router = require("express-promise-router");
const router = new Router();

router.get("/posts/:postId/comments", commentController.getAllComments);
router.post("/posts/:postId/comments", commentController.addComment);

module.exports = router;
