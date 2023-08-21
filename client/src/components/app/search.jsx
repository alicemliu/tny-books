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
            { books?.map((b) => 
                <BookCard
                    title={b?.title}
                    authors={b?.authors}
                    year={b?.year_published}
                    isbn={b?.isbn}
                    genre={b?.genre}
                />
            )}
        </div>
    );
}

export default Search;