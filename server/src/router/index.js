const express = require('express');
const { get_all_books, get_book } = require('../db');
const router = express.Router();

function create_router(db) {
  router.get('/books', async (req, res) => {
    const books = await get_all_books(db);
    res.send(books);
  });

  router.get('/books/:isbn', async (req, res) => {
    const isbn = req.params.isbn;
    const book = await get_book(db, isbn);
    res.send(book);
  });

  router.get('/', (req, res) => {
    res.send('hello, world');
  });

  return router;
}

module.exports = {
  create_router
};
