import { render, screen } from '@testing-library/react';
import Table from './table'; // Adjust the import if your Table component is in a different location

// Sample columns and data for the table
const sampleColumns = [
  { Header: 'Name', accessor: 'name' },
  { Header: 'Age', accessor: 'age' },
  { Header: 'Email', accessor: 'email' },
];

const sampleData = [
  { name: 'John Doe', age: 28, email: 'john@example.com' },
  { name: 'Jane Smith', age: 32, email: 'jane@example.com' },
];

// Test for rendering the table with the correct columns and data
describe('Table Component', () => {
  it('renders the table with correct headers and data', () => {
    render(<Table columns={sampleColumns} data={sampleData} />);

    // Check if headers are in the document
    sampleColumns.forEach(column => {
      expect(screen.getByText(column.Header)).toBeInTheDocument();
    });

    // Check if all data cells are in the document
    sampleData.forEach(row => {
      Object.values(row).forEach(cell => {
        expect(screen.getByText(cell.toString())).toBeInTheDocument();
      });
    });
  });
});
