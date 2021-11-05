const httpClient = require("../../common/httpClient");

const postClient = httpClient(
  process.env.POSTS_SERVICE_URL ||
    "https://6185680e23a2fe0017fff5f6.mockapi.io/"
);

const getPostById = async (postId) => {
  try {
    const post = await postClient.get(`/posts/${postId}`);
    return post.data;
  } catch (error) {
    console.log(error.response);
  }
};

const isPostExist = async (postId) => {
  const post = (await getPostById(postId)) || {};
  return post.id;
};

module.exports = { isPostExist, getPostById };
