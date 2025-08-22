const express = require('express');
const controller = require('../controllers/librarySystem.controller');
const router = express.Router();

// CRUD routes for books
router.post('/', controller.createBook);
router.get('/', controller.getBooks);
router.get("/recommendations", controller.getRecommendations);
router.get('/:id', controller.getBookById);
router.put('/:id', controller.updateBook);
router.delete('/:id', controller.deleteBook);

module.exports = router;
