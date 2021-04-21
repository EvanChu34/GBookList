const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./api/api-books");

router.use("/api", bookRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;