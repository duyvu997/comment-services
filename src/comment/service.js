const fs = require("fs");
const path = require("path");
const { pool } = require("../db");


const sqlGetAllComment = fs
  .readFileSync(path.resolve(__dirname, "./sql/get-all-comment.sql"))
  .toString();
const insertComment = fs
  .readFileSync(path.resolve(__dirname, "./sql/insert-comment.sql"))
  .toString();

const addComment = async (postId, userId, commentContent) => {
  const rawData = await pool.query(insertComment, [
    postId,
    userId,
    commentContent,
  ]);

  return rawData.rows;
};

const getAllComments = async (postId) => {
  const rawData = await pool.query(sqlGetAllComment, [postId]);

  return rawData.rows;
};

module.exports = { addComment, getAllComments };
