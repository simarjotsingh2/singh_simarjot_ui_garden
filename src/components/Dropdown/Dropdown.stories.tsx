// src/components/Dropdown/Dropdown.stories.tsx
import { Meta, StoryFn } from '@storybook/react';
import Dropdown from './Dropdown';

export default {
    title: 'Components/Dropdown',
    component: Dropdown,
} as Meta<typeof Dropdown>;

const Template: StoryFn<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
    options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
    ],
    selectedOption: '1',
    onSelect: (option: string) => console.log(option), // Use onSelect here
};
