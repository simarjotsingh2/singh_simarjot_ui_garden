// src/components/Card/Card.tests.tsx

import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
  test('renders the card and is visible', () => {
    render(<Card title="Test Card" content="This is a test card." />);
    const titleElement = screen.getByText(/Test Card/i);
    const contentElement = screen.getByText(/This is a test card./i);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toBeVisible();
    expect(contentElement).toBeInTheDocument();
    expect(contentElement).toBeVisible();
  });

  test('card has correct styles when backgroundColor is changed', () => {
    render(<Card title="Styled Card" content="Styled content." backgroundColor="#123456" />);
    const cardElement = screen.getByText(/Styled Card/i).parentElement;
    expect(cardElement).toHaveStyle('background-color: #123456');
  });
});
