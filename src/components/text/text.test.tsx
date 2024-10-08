import { render, screen } from '@testing-library/react';
import Text from './text';

test('renders text component', () => {
    render(<Text content="Hello, World!" />);
    const textElement = screen.getByText(/Hello, World!/i);
    expect(textElement).toBeInTheDocument();
});
