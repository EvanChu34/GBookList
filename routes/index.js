const router = require("express").Router();
const bookRoutes = require("./api-books");

router.use("/books", bookRoutes);

module.exports = router;