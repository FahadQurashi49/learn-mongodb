const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creates the book schema
const BookSchema = new Schema({
  name: String,
  pages: Number
});

// creates the author schema
const AuthorSchema = new Schema({
  name: String,
  age: Number,
  books: [BooksSchema]
});
// creates the model name 'author' based on AuthorSchema
const Author = mongoose.model('author', AuthorSchema);
// exports the model
module.exports = Author;
