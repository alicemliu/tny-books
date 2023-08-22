import { BrowserRouter } from 'react-router-dom';
import {
    mockTitle,
    mockAuthors,
    mockYear,
    mockIsbn,
    mockGenre
} from './mocks.js';
import {
    render,
    screen,
} from '@testing-library/react';
import BookCard from '../book-card';

describe(BookCard.name, () => {
    function renderComponent() {
        render(
            <BrowserRouter>
                <BookCard
                    title={mockTitle}
                    authors={mockAuthors}
                    year={mockYear}
                    isbn={mockIsbn}
                    genre={mockGenre}
                />
            </BrowserRouter>
        );
    }

    test('should render the title, authors, and year props passed', () => {
        renderComponent();

        const title = screen.getByText(mockTitle);
        const authors = screen.getByText(mockAuthors);
        const year = screen.getByText(mockYear);

        expect(title).toBeInTheDocument();
        expect(authors).toBeInTheDocument();
        expect(year).toBeInTheDocument();
    });

    test('should render with a link to the passed isbn', () => {
        renderComponent();

        const link = screen.getByRole('link').getAttribute('href');
        expect(link).toBe(`/books/${mockIsbn}`);
    });
});
