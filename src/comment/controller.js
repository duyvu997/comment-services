const commentService = require("./service");


const addComment = async (req, res, next) => {
  
  const postId = req.params.postId;
  const { userId, commentContent } = req.body || {};

  const result = await commentService.addComment(postId, userId, commentContent);
  
  return res.status(200).send(result);
};

const getAllComments = async (req, res, next) => {
  const postId = req.params.postId;
  
  const result = await commentService.getAllComments(postId);
  
  return res.status(200).send(result);
};

module.exports = { addComment, getAllComments };
