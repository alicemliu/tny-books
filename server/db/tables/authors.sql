DROP TABLE IF EXISTS authors;

CREATE TABLE authors (
    author_id               INTEGER PRIMARY KEY AUTOINCREMENT,
    author_name             TEXT,
    author_date_of_birth    DATE,
    author_date_of_death    DATE
);

INSERT INTO authors (
    author_name,
    author_date_of_birth,
    author_date_of_death
) VALUES (
    'David Foster Wallace',
    '1962-02-21',
    '2008-09-12'
);

INSERT INTO authors (
    author_name,
    author_date_of_birth,
    author_date_of_death
) VALUES (
    'Vladimir Nabokov',
    '1899-04-22',
    '1977-07-02'
);

INSERT INTO authors (
    author_name,
    author_date_of_birth
) VALUES (
    'Zadie Smith',
    '1975-10-25'
);