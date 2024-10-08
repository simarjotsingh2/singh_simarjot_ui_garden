import { Meta, StoryFn } from '@storybook/react';
import Button from './button';
import { ButtonProps } from './button.types';


export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Click Me',
  backgroundColor: '#ff0',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  backgroundColor: '#007BFF',
  disabled: true,
};
