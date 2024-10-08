// src/components/Dropdown/Dropdown.tsx
import React from 'react';
import styled from 'styled-components';

interface Option {
    label: string;
    value: string;
}

interface DropdownProps {
    options: Option[]; // Array of objects
    selectedOption: string;
    onSelect: (option: string) => void; // Expecting onSelect instead of onChange
}

const StyledDropdown = styled.select`
    width: 100%;
    padding: 10px;
`;

const Dropdown: React.FC<DropdownProps> = ({ options, selectedOption, onSelect }) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onSelect(e.target.value); // Cast target to HTMLSelectElement
    };

    return (
        <StyledDropdown value={selectedOption} onChange={handleChange}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </StyledDropdown>
    );
};

export default Dropdown;
