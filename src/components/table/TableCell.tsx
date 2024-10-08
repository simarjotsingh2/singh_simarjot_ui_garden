import React from 'react';

// Define the props for the TableCell component
interface TableCellProps {
  children: React.ReactNode; // Define children as a prop
}

// Create a functional component for TableCell
const TableCell: React.FC<TableCellProps> = ({ children }) => {
  return <td>{children}</td>; // Render the children inside a <td>
};

export default TableCell;
