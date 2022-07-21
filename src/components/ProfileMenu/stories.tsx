import { Meta, Story } from '@storybook/react';
import ProfileMenu, { ProfileMenuProps } from '.';

export default {
  title: `ProfileMenu`,
  component: ProfileMenu,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {

  }
} as Meta

export const Default: Story<ProfileMenuProps> = (args) => <ProfileMenu {...args} />
