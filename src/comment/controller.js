const commentService = require("./service");
const postClient = require("../gateway/post-service/postClient");
const userClient = require("../gateway/server-identity/serverClient");

const addComment = async (req, res, next) => {
  const postId = req.params.postId;
  const { userId, commentContent } = req.body || {};
  const [isUserExist, isPostExist] = await Promise.all([
    userClient.isUserExist(userId),
    postClient.isPostExist(postId),
  ]);

  if (!isUserExist) {
    return res.status(400).json({ msg: "User not found" });
  }
  if (!isPostExist) {
    return res.status(400).json({ msg: "Post not found" });
  }

  const result = await commentService.addComment(
    postId,
    userId,
    commentContent
  );

  return res.status(200).send(result);
};

const getAllComments = async (req, res, next) => {
  const postId = req.params.postId;

  const isPostExist = await postClient.isPostExist(postId);
  if (!isPostExist) {
    return res.status(400).json({ msg: "Post not found" });
  }

  const result = await commentService.getAllComments(postId);

  return res.status(200).send(result);
};

module.exports = { addComment, getAllComments };
