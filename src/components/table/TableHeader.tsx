import React from 'react';

// Define the props for the TableHeader component
interface TableHeaderProps {
  children: React.ReactNode; // Define children as a prop
}

// Create a functional component for TableHeader
const TableHeader: React.FC<TableHeaderProps> = ({ children }) => {
  return <th>{children}</th>; // Render the children inside a <th>
};

export default TableHeader;
