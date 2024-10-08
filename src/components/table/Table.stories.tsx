import { Meta, StoryFn } from '@storybook/react';
import Table from './table';
import { TableProps } from './Table.types';

export default {
  title: 'Components/Table',
  component: Table,
} as Meta<typeof Table>;

const Template: StoryFn<typeof Table> = (args: TableProps) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Age', accessor: 'age' },
    { Header: 'Email', accessor: 'email' },
  ],
  data: [
    { name: 'John Doe', age: 28, email: 'john@example.com' },
    { name: 'Jane Smith', age: 32, email: 'jane@example.com' },
  ],
};
