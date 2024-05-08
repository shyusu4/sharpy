import { Meta, StoryObj } from '@storybook/react';
import { Link } from '../components/_ui/Link';

const meta = {
  title: 'UI/Link',
  component: Link,
  argTypes: {
    iconVisible: {
      type: 'boolean',
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof Link>;

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
