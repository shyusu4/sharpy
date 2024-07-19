import { Meta, StoryObj } from '@storybook/react';
import { AvatarCard } from '@/components/index';
import { sanjuanitaOrdonez } from '@/assets/index';

const meta = {
  title: 'UI/AvatarCard',
  component: AvatarCard,
} as Meta<typeof AvatarCard>;

export default meta;
type Story = StoryObj<typeof AvatarCard>;

export const Default: Story = {
  args: {
    avatarImg: sanjuanitaOrdonez.src,
    name: 'Sanjuanita Ordonez',
    role: 'Co-Founder',
  },
};
