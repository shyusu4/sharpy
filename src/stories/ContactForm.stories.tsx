import { Meta, StoryObj } from '@storybook/react';
import { ContactForm } from '@/components/index';

const meta = {
  title: 'UI/ContactForm',
  component: ContactForm,
} as Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof ContactForm>;

export const Default: Story = {
  args: {},
};
