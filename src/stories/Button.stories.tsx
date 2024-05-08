import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/_ui/Button';

const meta = {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    iconVisible: {
      type: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    intent: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    intent: 'secondary',
  },
};
