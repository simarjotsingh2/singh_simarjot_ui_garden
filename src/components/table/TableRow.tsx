// TableRow.tsx
import React from 'react';

interface TableRowProps {
  row: string[]; // Single row of data
}

const TableRow: React.FC<TableRowProps> = ({ row }) => {
  return (
    <tr>
      {row.map((cell, index) => (
        <td key={index}>{cell}</td>
      ))}
    </tr>
  );
};

export default TableRow;
