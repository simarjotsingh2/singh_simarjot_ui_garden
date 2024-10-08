// src/components/Text/Text.tsx
import React from 'react';
import styled from 'styled-components';

interface TextProps {
    content: string;
    color?: string;
}

const StyledText = styled.p<{ color?: string }>`
    color: ${(props) => props.color || 'black'};
`;

const Text: React.FC<TextProps> = ({ content, color }) => {
    return <StyledText color={color}>{content}</StyledText>;
};

export default Text;
