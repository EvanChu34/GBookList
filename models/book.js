const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    id:{type: String, require: true},
    title:{type: String, require: true},
    authors:{type: String, require: true},
    description:{type: String, require: true},
    image:{type: String, unique: true,require: true},
    link:{type: String, require: true}
})

const GBooks = mongoose.model("Gbooks", bookSchema);

module.exports = GBooks;
