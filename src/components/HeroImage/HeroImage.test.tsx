import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';

test('renders the Hero Image', () => {
    render(<HeroImage imageSrc="https://via.placeholder.com/600x300" altText="Hero Image" />);
    const imgElement = screen.getByAltText(/Hero Image/i);
    expect(imgElement).toBeInTheDocument();
});
