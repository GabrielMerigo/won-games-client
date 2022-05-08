import { Meta, Story } from '@storybook/react';
import Menu from '.';

export default {
  title: `Menu`,
  component: Menu
} as Meta

export const MenuStory: Story = () => <Menu />

MenuStory.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}
