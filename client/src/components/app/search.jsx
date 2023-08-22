import { getAllBooks } from './util';
import { useEffect, useState } from 'react';
import BookCard from './book-card';
import classNames from 'classnames';

const Search = () => {
    const [books, setBooks] = useState([]);
    const [searchBar, setSearchBar] = useState('');

    useEffect(() => {
        (async () => {
            const res = await getAllBooks();
            setBooks(res);
        })();
    }, []);

    const handleChange = (event) => {
        setSearchBar(event.target.value);
    };

    const filteredBooks = books?.filter((b) =>
        b?.title.toLowerCase().includes(searchBar.toLowerCase()) ||
        b?.authors.toLowerCase().includes(searchBar.toLowerCase())
    );

    const searchBarClasses = classNames(
        "w-full",
        "mb-12 p-4",
        "border border-black",
        "font-normal"
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search by title, author"
                className={searchBarClasses}
                value={searchBar}
                onChange={handleChange}
            />
            { filteredBooks?.map((b) => 
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