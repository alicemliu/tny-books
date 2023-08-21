import { getAllBooks } from './util';
import { useEffect, useState } from 'react';

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
                <p>{b.title}</p>
            )}
        </div>
    );
}

export default Search;