import { Meta, StoryObj } from '@storybook/react';
import { TestimonialCard } from '@/components/index';
import { lareeMinton } from '@/assets/index';

const meta = {
  title: 'UI/TestimonialCard',
  component: TestimonialCard,
} as Meta<typeof TestimonialCard>;

export default meta;
type Story = StoryObj<typeof TestimonialCard>;

export const Default: Story = {
  args: {
    icon: <img src={lareeMinton.src} alt="icon" />,
    author: 'Laree Minton',
    review:
      '“One of the best customer service teams & always available when needed. Amazing follow up and great team work. Sharpy really has transformed the way we look at taking, track, & managing transactions.”',
  },
};
