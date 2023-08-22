import { BrowserRouter } from 'react-router-dom';
import {
    render,
    screen,
    waitFor,
} from '@testing-library/react';
import {
    mockTitle,
    mockAuthors,
    mockYear,
    mockIsbn,
    mockPublisher,
    mockPublisherCity,
    mockFormat,
    mockGenre,
} from './mocks.js';
import * as util from '../util';
import BookDetail from '../book-detail';

jest.mock('../util');

describe(BookDetail.name, () => {
    const mockResponse = {
        "isbn": mockIsbn,
        "title": mockTitle,
        "publisher": mockPublisher,
        "publisher_city": mockPublisherCity,
        "format": mockFormat,
        "year_published": mockYear,
        "genre": mockGenre,
        "authors": mockAuthors
    };

    function renderComponent() {
        render(
            <BrowserRouter>
                <BookDetail />
            </BrowserRouter>
        );
    }

    test('should show book\'s details as returned from the API', async () => {
        util.getBook.mockResolvedValue(mockResponse);
        renderComponent();

        await waitFor(() => {
            const title = screen.getByText(mockTitle);
            const authors = screen.getByText(mockAuthors);
            const year = screen.getByText(mockYear);
            const publisher = screen.getByText(mockPublisher);
            const publisher_city = screen.getByText(mockPublisherCity);
            const format = screen.getByText(mockFormat);

            expect(title).toBeInTheDocument();
            expect(authors).toBeInTheDocument();
            expect(year).toBeInTheDocument();
            expect(publisher).toBeInTheDocument();
            expect(publisher_city).toBeInTheDocument();
            expect(format).toBeInTheDocument();
        });
    });
});
