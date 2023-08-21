import { Link } from "react-router-dom";
import classNames from 'classnames';

const BookCard = ({
    title,
    authors,
    year,
    isbn,
    genre,
}) => {
    const isFiction = genre === 'fiction';

    const cardClasses = classNames(
        'mx-5 my-2',
        'h-20',
        'border-t-2',
        'bg-inherit',
        'overflow-hidden',
        'p-2',
        isFiction
            ? 'border-teal-600 hover:bg-teal-50'
            : 'border-pink-600 hover:bg-pink-50',
    );

    return (
        <Link to={`/book/${isbn}`}>
            <div className={cardClasses}>
                <h2 className={'text-4xl my-1'}>
                    {title}
                </h2>
                <div className={'text-xs flow-root font-normal'}>
                    <p className={'float-left'}>
                        {authors}
                    </p>
                    <p className={'float-right'}>
                        {year}
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default BookCard;