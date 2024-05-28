import { Meta, StoryObj } from '@storybook/react';
import { CTAcard } from '@/components/index';
import { mouseClicker } from '@/assets/index';

const meta = {
  title: 'UI/CTAcard',
  component: CTAcard,
} as Meta<typeof CTAcard>;

export default meta;
type Story = StoryObj<typeof CTAcard>;

export const Default: Story = {
  args: {
    icon: <img src={mouseClicker.src} alt="icon" />,
    linkText: 'Explore Report',
    content:
      'Access your reports anytime from a smartphone, tab, or any device',
  },
};
