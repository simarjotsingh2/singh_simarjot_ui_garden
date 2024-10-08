import { render, screen } from '@testing-library/react';
import Img from './Img';

test('renders image', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Placeholder Image" />);
    const imgElement = screen.getByAltText(/Placeholder Image/i);
    expect(imgElement).toBeInTheDocument();
});
