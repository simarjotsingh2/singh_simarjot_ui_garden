import { render, screen } from '@testing-library/react';
import Label from './label';

test('renders label with correct text and htmlFor attribute', () => {
  render(<Label text="Name" htmlFor="nameInput" />);

  const labelElement = screen.getByText(/Name/i);

  expect(labelElement).toBeInTheDocument();
  expect(labelElement).toHaveAttribute('for', 'nameInput');
});
