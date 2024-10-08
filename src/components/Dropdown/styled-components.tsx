import styled from 'styled-components';

export const StyledText = styled.p<{ color?: string; fontSize?: string }>`
    color: ${(props) => props.color || 'black'};
    font-size: ${(props) => props.fontSize || '16px'};
`;

export const StyledDropdown = styled.select`
    /* Add your styles here */
`;

export const StyledImg = styled.img`
    /* Add your styles here */
`;

export const StyledHeroImage = styled.img`
    width: 100%;
    height: auto;
`;

// Add any other styled components here as needed
