import { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '../components/_ui/Accordion';

const meta = {
  title: 'UI/Accordion',
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof Accordion>;

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
