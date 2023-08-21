import { getBook } from './util';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageNotFound from './page-not-found';
import classNames from 'classnames';

const Title = ({title}) => {
    return (
        <div className={'mb-4'}>
            <h2 className={'font-normal'}>TITLE</h2>
            <p className={'text-4xl text-overflow'}>
                {title}
            </p>
        </div>
    );
}

const Field = ({label, val}) => {
    return (
        <div className={'mb-4'}>
            <h2 className={'font-normal'}>{label}</h2>
            <p className={'text-lg text-overflow'}>{val}</p>
        </div>
    );
}

const BookDetail = () => {
    const { isbn } = useParams();
    const [book, setBook] = useState({});
    const isFiction = book?.genre === 'fiction';

    useEffect(() => {
        (async () => {
            const res = await getBook(isbn);
            setBook(res);
        })();
    }, [isbn]);

    const cardClasses = classNames(
        'mx-5 my-2',
        'border-l-2',
        'bg-inherit',
        'overflow-hidden',
        'p-2',
        isFiction
            ? 'border-teal-600'
            : 'border-pink-600',
    );

    return (
        book?.title
            ? <div className={cardClasses}>
                <Title title={book?.title} />
                <Field label={'AUTHOR'} val={book?.authors} />
                <Field label={'PUBLISHER'} val={book?.publisher} />
                <Field label={'CITY'} val={book?.publisher_city} />
                <Field label={'FORMAT'} val={book?.format} />
                <Field label={'YEAR'} val={book?.year_published} />
                <Field label={'ISBN'} val={book?.isbn} />
            </div>
            : <PageNotFound />
    );
}

export default BookDetail;