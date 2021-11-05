const httpClient = require("../../common/httpClient");

const serverIdentity = httpClient(
  process.env.SERVER_IDENTITY_URL ||
    "https://6185680e23a2fe0017fff5f6.mockapi.io/"
);

const getUserById = async (userId) => {
  try {
    const post = await serverIdentity.get(`/users/${userId}`);
    return post.data;
  } catch (error) {
    console.log(error.response);
  }
};

const isUserExist = async (postId) => {
  const post = (await getUserById(postId)) || {};
  return post.id;
};

module.exports = { isUserExist, getUserById };
