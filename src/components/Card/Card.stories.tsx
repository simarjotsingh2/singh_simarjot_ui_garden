// src/components/Card/Card.stories.tsx

import { Meta, StoryFn } from '@storybook/react';
import Card from './Card';
import { CardProps } from './Card.types';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
    title: { control: 'text' },
    content: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  content: 'This is the content of the card.',
  backgroundColor: '#f9f9f9',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  backgroundColor: '#e0e0e0',
};
