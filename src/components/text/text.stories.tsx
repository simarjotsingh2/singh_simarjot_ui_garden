// src/components/Text/Text.stories.tsx
import { Meta, StoryFn } from '@storybook/react';
import Text from './text';
import { TextProps } from './text.types';

// Define the component metadata
export default {
    title: 'Components/Text',
    component: Text,
} as Meta<typeof Text>;

// Create a template for the stories
const Template: StoryFn<typeof Text> = (args: TextProps) => <Text {...args} />;

// Define the default story
export const Default = Template.bind({});
Default.args = {
    content: 'Hello, World!',
    color: 'black',
};

// Define a story with a different color
export const RedText = Template.bind({});
RedText.args = {
    content: 'This is red text!',
    color: 'red',
};
