import { render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';

test('renders radio button with label', () => {
    render(<RadioButton label="Option 1" checked={false} onChange={() => {}} />);
    expect(screen.getByLabelText(/Option 1/i)).toBeInTheDocument();
});
