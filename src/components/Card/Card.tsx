// src/components/Card/Card.tsx

import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

// Define the styled components
const CardContainer = styled.div<{ backgroundColor?: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor || '#fff'};
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  max-width: 300px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const CardTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 1.25rem;
`;

const CardContent = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #555;
`;

// Define the Card component
const Card: React.FC<CardProps> = ({title, content, backgroundColor }) => {
  return (
    <CardContainer backgroundColor={backgroundColor}>
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
    </CardContainer>
  );
};

export default Card;
