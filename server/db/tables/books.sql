DROP TABLE IF EXISTS books;

CREATE TABLE books (
    isbn            TEXT PRIMARY KEY,
    title           TEXT,
    pages           INTEGER,
    publisher       TEXT,
    publisher_city  TEXT,
    year_published  INTEGER,
    format          TEXT,
    genre           TEXT
);

INSERT INTO books (
    title,
    isbn,
    pages,
    publisher,
    publisher_city,
    year_published,
    format,
    genre
) VALUES (
    'The Broom of the System',
    '0670812307',
    467,
    'Viking',
    'New York',
    1987,
    'hardcover',
    'fiction'
);

INSERT INTO books (
    title,
    isbn,
    pages,
    publisher,
    publisher_city,
    year_published,
    format,
    genre
) VALUES (
    'Infinite Jest',
    '0274994747',
    1079,
    'Back Bay Books',
    'Boston',
    2006,
    'paperback',
    'fiction'
);

INSERT INTO books (
    title,
    isbn,
    pages,
    publisher,
    publisher_city,
    year_published,
    format,
    genre
) VALUES (
    'Infinite Jest',
    '0349121087',
    1104,
    'Abacus',
    'New York',
    1997,
    'paperback',
    'fiction'
);

INSERT INTO books (
    title,
    isbn,
    pages,
    publisher,
    publisher_city,
    year_published,
    format,
    genre
) VALUES (
    'Oblivion',
    '0316919810',
    329,
    'Little, Brown and Company',
    'New York',
    2004,
    'paperback',
    'fiction'
);

INSERT INTO books (
    title,
    isbn,
    pages,
    publisher,
    publisher_city,
    year_published,
    format,
    genre
) VALUES (
    'A Supposedly Fun Thing I’ll Never Do Again: Essays and Arguments',
    '0316925284',
    368,
    'Back Bay Books',
    'Boston',
    1998,
    'paperback',
    'nonfiction'
);

INSERT INTO books (
    title,
    isbn,
    pages,
    publisher,
    publisher_city,
    year_published,
    format,
    genre
) VALUES (
    'Consider the Lobster and Other Essays',
    '0316013323',
    343,
    'Back Bay Books',
    'Boston',
    2007,
    'paperback',
    'nonfiction'
);

INSERT INTO books (
    title,
    isbn,
    pages,
    publisher,
    publisher_city,
    year_published,
    format,
    genre
) VALUES (
    'The Gift',
    '0679727256',
    384,
    'Vintage',
    'New York',
    1991,
    'paperback',
    'fiction'
);

INSERT INTO books (
    title,
    isbn,
    pages,
    publisher,
    publisher_city,
    year_published,
    format,
    genre
) VALUES (
    'Bend Sinister',
    '0679727272',
    272,
    'Vintage',
    'New York',
    1990,
    'paperback',
    'fiction'
);

INSERT INTO books (
    title,
    isbn,
    pages,
    publisher,
    publisher_city,
    year_published,
    format,
    genre
) VALUES (
    'Lolita',
    '0679723161',
    317,
    'Vintage',
    'New York',
    1989,
    'paperback',
    'fiction'
);

INSERT INTO books (
    title,
    isbn,
    pages,
    publisher,
    publisher_city,
    year_published,
    format,
    genre
) VALUES (
    'Speak, Memory: An Autobiography Revisited',
    '0679723390',
    336,
    'Vintage',
    'New York',
    1989,
    'paperback',
    'nonfiction'
);

INSERT INTO books (
    title,
    isbn,
    pages,
    publisher,
    publisher_city,
    year_published,
    format
) VALUES (
    'White Teeth',
    '0375703861',
    464,
    'Vintage',
    'New York',
    2001,
    'paperback'
);

INSERT INTO books (
    title,
    isbn,
    pages,
    publisher,
    publisher_city,
    year_published,
    format
) VALUES (
    'On Beauty',
    '014101945X',
    464,
    'Penguin',
    'London',
    2006,
    'paperback'
);

INSERT INTO books (
    title,
    isbn,
    pages,
    publisher,
    publisher_city,
    year_published,
    format
) VALUES (
    'NW',
    '1594203970',
    416,
    'Penguin',
    'London',
    2012,
    'hardcover'
);