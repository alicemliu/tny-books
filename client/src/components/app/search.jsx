import { getAllBooks } from './util';
import { useEffect, useState } from 'react';
import BookCard from './book-card';

const Search = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await getAllBooks();
            setBooks(res);
        })();
    }, []);

    return (
        <div>
            { books.map((b) => 
                <BookCard
                    title={b.title}
                    authors={b.authors}
                    isbn={b.isbn}
                />
            )}
        </div>
    );
}

export default Search;