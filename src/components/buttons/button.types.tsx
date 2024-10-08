// src/components/Button/Button.types.ts
export interface ButtonProps {
  label: string;
  backgroundColor?: string;
  disabled?: boolean;
  onClick?: () => void;
}
