import { render } from '@testing-library/react';
import App from '../index';

test('should render’', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
});
