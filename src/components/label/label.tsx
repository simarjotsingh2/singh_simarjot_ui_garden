import React from 'react';

interface LabelProps {
  text: string;
  htmlFor?: string;
}

const Label: React.FC<LabelProps> = ({ text, htmlFor }) => (
  <label htmlFor={htmlFor}>{text}</label>
);

export default Label;
