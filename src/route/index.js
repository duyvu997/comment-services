const Router = require("express-promise-router");
const router = new Router();
const commentRoutes = require("./comment");

router.use("/api/v1", commentRoutes);

module.exports = () => router;