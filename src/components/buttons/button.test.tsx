// src/components/Button/Button.test.tsx
import { render, screen } from '@testing-library/react';
import Button from './button';

describe('Button Component', () => {
  test('renders button with provided label', () => {
    render(<Button label="Test Button" />);
    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('button has correct background color when disabled', () => {
    render(<Button label="Disabled Button" disabled />);
    const buttonElement = screen.getByText(/Disabled Button/i);
    expect(buttonElement).toHaveStyle('opacity: 0.6');
    expect(buttonElement).toHaveStyle('pointer-events: none');
  });
});
