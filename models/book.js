const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    id:{},
    title:{},
    authors:{},
    description:{},
    image:{},
    link:{}
})

const GBooks = mongoose.model("Gbooks", bookSchema);

module.exports = GBooks;
