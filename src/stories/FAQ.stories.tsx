import { Meta, StoryObj } from '@storybook/react';
import { FAQ } from '../components/_ui/FAQ';

const meta = {
  title: 'UI/FAQ',
  component: FAQ,
} satisfies Meta<typeof FAQ>;

export default meta;
type Story = StoryObj<typeof FAQ>;

export const Primary: Story = {
  args: {
    intent: 'primary',
    items: [
      {
        title: 'What is the meaning of life?',
        content: 'The meaning of life is to give life meaning.',
      },
      {
        title: 'What is the meaning of life?',
        content: 'The meaning of life is to give life meaning.',
      },
      {
        title: 'What is the meaning of life?',
        content: 'The meaning of life is to give life meaning.',
      },
    ],
  },
};

export const Secondary: Story = {
  args: {
    intent: 'secondary',
    items: [
      {
        title: 'What is the meaning of life?',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat, tempor condimentum commodo tincidunt sit dictumst. Eu placerat to a arcu at sem vitae eros, purus nonprofit.',
      },
      {
        title: 'What is the meaning of life?',
        content: 'The meaning of life is to give life meaning.',
      },
      {
        title: 'What is the meaning of life?',
        content: 'The meaning of life is to give life meaning.',
      },
    ],
  },
};
