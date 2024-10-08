// HeroImage.stories.tsx
import { Meta, StoryFn } from '@storybook/react';
import HeroImage from './HeroImage';

export default {
    title: 'Components/HeroImage',
    component: HeroImage,
} as Meta<typeof HeroImage>;

const Template: StoryFn<typeof HeroImage> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
    imageSrc: 'https://via.placeholder.com/600x300',
    altText: 'Sample Hero Image',
    title: 'Welcome to Our Website',
    subtitle: 'We are glad to have you here',
};
