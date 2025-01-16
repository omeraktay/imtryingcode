import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    id: {type: Number},
    serial: {type: String},
    tags: [{type: String}],
    publishingCompany: {type: String},
    inventory: {type: String},
    unitsSold: {type: String}
});

const Book = mongoose.model('Book', bookSchema);

export default Book;