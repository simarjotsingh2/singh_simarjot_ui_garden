// Img.tsx
import React from 'react';

interface ImgProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

const Img: React.FC<ImgProps> = ({ src, alt, width, height }) => {
    return <img src={src} alt={alt} width={width} height={height} />;
};

export default Img;
