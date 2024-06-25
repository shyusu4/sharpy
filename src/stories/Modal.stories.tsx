import { Meta, StoryObj } from '@storybook/react';
import { Modal } from '@/components/index';

const meta = {
  title: 'UI/Modal',
  component: Modal,
} as Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {},
};
