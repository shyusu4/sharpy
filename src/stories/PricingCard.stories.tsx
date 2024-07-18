import { Meta, StoryObj } from '@storybook/react';
import { PricingCard } from '@/components/index';

const meta = {
  title: 'UI/PricingCard',
  component: PricingCard,
} as Meta<typeof PricingCard>;

export default meta;
type Story = StoryObj<typeof PricingCard>;

export const Default: Story = {
  args: {
    title: 'Professional',
    description:
      'Get started with the basic features, but grow as fast as others.',
    price: '$99',
    billingCycle: '/month, billing monthly',
    features: [
      '150 Job Monitor',
      '10 Active Projects',
      'Up to 10 Team Members',
      '90 Days Message History',
      'Project Management',
      'Premium Support',
      'Access to FramerBite Team',
    ],
  },
};
