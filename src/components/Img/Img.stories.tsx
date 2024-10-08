// Img.stories.tsx
import { Meta, StoryFn } from '@storybook/react';
import Img from './Img';

export default {
    title: 'Components/Img',
    component: Img,
} as Meta<typeof Img>;

const Template: StoryFn<typeof Img> = (args) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
    src: 'https://via.placeholder.com/150',
    alt: 'Placeholder Image',
    width: 150,
    height: 150,
};
