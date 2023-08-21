const path = require('node:path');
const sqlite3 = require('sqlite3').verbose();

const DB_LOCATION = 'db/data/tny-ei-tech-test.db';

async function start_db() {
  const filename = path.resolve('.', DB_LOCATION);
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(filename,
      sqlite3.OPEN_READWRITE,
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(db);
        }
      }
    );
  });
}

async function stop_db(db) {
  return new Promise((resolve) => {
    db.close(() => resolve());
  });
}

async function get_all_books(db) {
  const sql = 
    `
    SELECT
      books.title,
      books.isbn,
      GROUP_CONCAT(authors.author_name, ', ') AS authors
    FROM books
    INNER JOIN authorbooks ON books.isbn = authorbooks.isbn
    INNER JOIN authors ON authorbooks.author_id = authors.author_id
    GROUP BY books.isbn;
    `;

  return new Promise((resolve, reject) => {
    db.all(sql, (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    })
  });
}

async function get_book(db, isbn) {
  const sql = 
    `
    SELECT
      books.isbn,
      books.title,
      books.publisher,
      books.publisher_city,
      books.format,
      GROUP_CONCAT(authors.author_name, ', ') AS authors
    FROM books
    INNER JOIN authorbooks ON books.isbn = authorbooks.isbn
    INNER JOIN authors ON authorbooks.author_id = authors.author_id
    WHERE books.isbn = $1;
    `;

  return new Promise((resolve, reject) => {
    db.all(sql, [isbn], (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    })
  });
}

module.exports = {
  start_db,
  stop_db,
  get_all_books,
  get_book
}
