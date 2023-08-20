DROP TABLE IF EXISTS authorbooks;

CREATE TABLE authorbooks (
    author_id   INTEGER,
    isbn        TEXT,
    FOREIGN KEY (author_id) REFERENCES authors(author_id),
    FOREIGN KEY (isbn) REFERENCES books(isbn),
    PRIMARY KEY (author_id, isbn)
);

WITH dfw_id as (
    SELECT author_id FROM authors
    WHERE author_name = 'David Foster Wallace'
    AND author_date_of_birth = '1962-02-21'
    AND author_date_of_death = '2008-09-12'
)
INSERT INTO authorbooks (
    author_id,
    isbn
)
SELECT author_id, '0670812307' FROM dfw_id
UNION
SELECT author_id, '0274994747' FROM dfw_id
UNION
SELECT author_id, '0349121087' FROM dfw_id
UNION
SELECT author_id, '0316919810' FROM dfw_id
UNION
SELECT author_id, '0316925284' FROM dfw_id
UNION
SELECT author_id, '0316013323' FROM dfw_id;


WITH nabokov_id as (
    SELECT author_id FROM authors
    WHERE author_name = 'Vladimir Nabokov'
    AND author_date_of_birth = '1899-04-22'
    AND author_date_of_death = '1977-07-02'
)
INSERT INTO authorbooks (
    author_id,
    isbn
)
SELECT author_id, '0679727256' FROM nabokov_id
UNION
SELECT author_id, '0679727272' FROM nabokov_id
UNION
SELECT author_id, '0679723161' FROM nabokov_id
UNION
SELECT author_id, '0679723390' FROM nabokov_id;


WITH z_smith_id as (
    SELECT author_id FROM authors
    WHERE author_name = 'Zadie Smith'
    AND author_date_of_birth = '1975-10-25'
)
INSERT INTO authorbooks (
    author_id,
    isbn
)
SELECT author_id, '0375703861' FROM z_smith_id
UNION
SELECT author_id, '014101945X' FROM z_smith_id
UNION
SELECT author_id, '1594203970' FROM z_smith_id;