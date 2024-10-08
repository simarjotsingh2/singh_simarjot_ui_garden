// src/components/Dropdown/Dropdown.tests.tsx
import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown Component', () => {
    const mockOnSelect = jest.fn();

    it('should render correctly', () => {
        render(
            <Dropdown
                options={[
                    { label: 'Option 1', value: '1' },
                    { label: 'Option 2', value: '2' },
                ]}
                selectedOption="1"
                onSelect={mockOnSelect} // Use onSelect here
            />
        );

        expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('should call onSelect when an option is selected', () => {
        render(
            <Dropdown
                options={[
                    { label: 'Option 1', value: '1' },
                    { label: 'Option 2', value: '2' },
                ]}
                selectedOption="1"
                onSelect={mockOnSelect} // Use onSelect here
            />
        );

        // Simulate selecting a different option
        const dropdown = screen.getByRole('combobox') as HTMLSelectElement; // Cast to HTMLSelectElement
        dropdown.value = '2'; // Change to the value of the second option
        dropdown.dispatchEvent(new Event('change'));

        expect(mockOnSelect).toHaveBeenCalledWith('2'); // Check if the correct option is passed
    });
});
