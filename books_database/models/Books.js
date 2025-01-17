import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    id: {type: Number},
    serial: {type: String},
    tags: [{type: String}],
    publishingCompany: {type: String},
    inventory: {type: Number},
    unitsSold: {type: Number}
});

const Book = mongoose.model('Books', bookSchema);

export default Book;