// RadioButton.tsx
import React from 'react';

interface RadioButtonProps {
    label: string;
    checked: boolean;
    onChange: () => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, checked, onChange }) => (
    <label>
        <input type="radio" checked={checked} onChange={onChange} />
        {label}
    </label>
);

export default RadioButton;
