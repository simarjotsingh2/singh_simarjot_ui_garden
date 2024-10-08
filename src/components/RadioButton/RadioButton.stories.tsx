// RadioButton.stories.tsx
import { Meta, StoryFn } from '@storybook/react';
import RadioButton from './RadioButton';

export default {
    title: 'Components/RadioButton',
    component: RadioButton,
} as Meta<typeof RadioButton>;

const Template: StoryFn<typeof RadioButton> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Option 1',
    checked: false,
    onChange: () => alert('RadioButton clicked!'),
};
