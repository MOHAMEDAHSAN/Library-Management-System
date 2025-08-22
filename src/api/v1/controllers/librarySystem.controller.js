const { librarySystemSchema } = require('../schema/librarySystem.schema');
const service = require('../services/librarySystem.service');

// Add a new book
async function createBook(req, res) {
  try {
    const parsed = librarySystemSchema.safeParse(req.body);
    if (!parsed.success) {
      console.error("Validation error:", parsed.error.errors);
      return res.status(400).json({ errors: parsed.error.errors });
    }
    const book = await service.createBook(parsed.data);
    res.status(201).json(book);
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: err.message });
  }
}

// Get book by ID
async function getBookById(req, res) {
  try {
    const book = await service.getBookById(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Get all books (with optional filters)
async function getBooks(req, res) {
  try {
    const { status, title } = req.query;
    const filters = {};
    if (status) filters.status = status;
    if (title) filters.title = new RegExp(title, "i");
    const books = await service.getBooksByFilters(filters);
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Update book by ID
async function updateBook(req, res) {
  try {
    const parsed = librarySystemSchema.partial().safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ errors: parsed.error.errors });
    }
    const book = await service.updateBook(req.params.id, parsed.data);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Delete book
async function deleteBook(req, res) {
  try {
    const book = await service.deleteBook(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json({ message: 'Book deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Get recommendations by genre/status
async function getRecommendations(req, res) {
  try {
    const { genre, status } = req.query;
    const filters = {};
    if (genre) filters.genre = genre;
    if (status) filters.status = status;

    const recommendations = await service.getBooksByFilters(filters); // 👈 use service
    if (!recommendations.length) {
      return res.status(404).json({ message: "No recommendations found" });
    }

    res.json(recommendations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  createBook,
  getBookById,
  getBooks,
  updateBook,
  deleteBook,
  getRecommendations,
};
