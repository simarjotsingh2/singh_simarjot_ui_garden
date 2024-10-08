// TableFooter.tsx
import React from 'react';

interface TableProps {
  headers: string[];
  rows: string[][];
  children?: React.ReactNode; // Allow for optional children
}

const TableFooter: React.FC<TableProps> = ({headers, rows, children}) => {
  return (
    <tfoot>
      <tr>
        {/* You can render footer cells here based on your logic */}
        {headers.map((header, index) => (
          <td key={index}>{header}</td>
        ))}
      </tr>
      {children} {/* Render any children, if provided */}
    </tfoot>
  );
};

export default TableFooter;
