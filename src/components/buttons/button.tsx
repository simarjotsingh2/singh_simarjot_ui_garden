// src/components/Button/Button.tsx
import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './button.types';

const StyledButton = styled.button<{ backgroundColor?: string; disabled?: boolean }>`
  padding: 10px 20px;
  background-color: ${({ backgroundColor }) => backgroundColor || '#007BFF'};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  &:hover {
    background-color: ${({ backgroundColor }) => backgroundColor ? darkenColor(backgroundColor, 10) : '#0056b3'};
  }
`;

// Utility function to darken color
const darkenColor = (color: string, percent: number): string => {
  // Simple implementation, consider using a library like polished for color manipulation
  const num = parseInt(color.replace('#',''),16),
        amt = Math.round(2.55 * percent),
        R = (num >> 16) - amt,
        G = (num >> 8 & 0x00FF) - amt,
        B = (num & 0x0000FF) - amt;
  return `#${(
    0x1000000 +
    (R<255?R<1?0:R:255)*0x10000 +
    (G<255?G<1?0:G:255)*0x100 +
    (B<255?B<1?0:B:255)
  ).toString(16).slice(1)}`;
};

const Button: React.FC<ButtonProps> = ({ label, backgroundColor, disabled, onClick }) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};



export default Button;
