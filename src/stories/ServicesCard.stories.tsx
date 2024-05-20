import { Meta, StoryObj } from '@storybook/react';
import { ServicesCard } from '@/components/index';
import { square1 } from '@/assets/index';

const meta = {
  title: 'UI/ServicesCard',
  component: ServicesCard,
} as Meta<typeof ServicesCard>;

export default meta;
type Story = StoryObj<typeof ServicesCard>;

export const Default: Story = {
  args: {
    icon: <img src={square1.src} alt="icon" />,
    title: 'Sales Data',
    content:
      'Customer executes for the payment for goods or services and where sales taxes become payable.',
  },
};
