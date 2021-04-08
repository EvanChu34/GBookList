const router = require("express").Router();
const booksController = require("../controllers/booksController");

router.route("/")
    .get(booksController.findAll)
    .post(booksController.save);

router.route("/:id")
    .get(booksController.fineOne)
    .delete(booksController.remove);

module.exports = router;