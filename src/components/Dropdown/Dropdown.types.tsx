export interface Option {
  label: string;
  value: string;
}

export interface DropdownProps {
  options: Option[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
