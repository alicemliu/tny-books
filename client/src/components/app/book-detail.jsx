import { getBook } from './util';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
    const { isbn } = useParams();
    const [book, setBook] = useState({});

    useEffect(() => {
        (async () => {
            const res = await getBook(isbn);
            setBook(res);
        })();
    }, []);

    return (
        <div>
            <p>{book?.title}</p>
        </div>
    );
}

export default BookDetail;