const librarySystem = require('../model/librarySystem.model');

// Add new book
async function createBook(data) {
  return await librarySystem.create(data);
}

// Find book by ID
async function getBookById(id) {
  return await librarySystem.findById(id);
}

// Find all books (with optional filters)
async function getBooksByFilters(filters) {
  return await librarySystem.find(filters);
}

// Update book
async function updateBook(id, data) {
  return await librarySystem.findByIdAndUpdate(id, data, { new: true });
}

// Delete book
async function deleteBook(id) {
  return await librarySystem.findByIdAndDelete(id);
}

module.exports = {
  createBook,
  getBookById,
  getBooksByFilters,
  updateBook,
  deleteBook,
};
