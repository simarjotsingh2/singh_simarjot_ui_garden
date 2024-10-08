// HeroImage.tsx
import React from 'react';

interface HeroImageProps {
    imageSrc: string;
    altText: string;
    title?: string;
    subtitle?: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ imageSrc, altText, title, subtitle }) => {
    return (
        <div>
            <img src={imageSrc} alt={altText} />
            {title && <h1>{title}</h1>}
            {subtitle && <h2>{subtitle}</h2>}
        </div>
    );
};

export default HeroImage;
