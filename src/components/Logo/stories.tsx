import { Meta, Story } from '@storybook/react';
import Logo, { LogoProps } from '.';

export default {
  title: `Logo`,
  component: Logo
} as Meta

export const LogoStory: Story<LogoProps> = args => <Logo {...args} />
