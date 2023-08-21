import { Link } from "react-router-dom";

const BookCard = ({
    title,
    authors,
    isbn
}) => {
    return (
        <Link to={`/book/${isbn}`}>
            <div>
                <p>{title}</p>
                <p>{authors}</p>
            </div>
        </Link>
    );
}

export default BookCard;