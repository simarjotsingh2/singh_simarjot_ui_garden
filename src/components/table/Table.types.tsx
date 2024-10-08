// table.types.tsx
import React from 'react';

 interface Column {
  Header: string;
  accessor: string;
  children?: React.ReactNode; // Optional children prop
}

 export interface TableProps {
  columns: Column[];
  data: { [key: string]: any }[];

}
