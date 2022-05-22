import { Meta, Story } from '@storybook/react';
import Menu, { MenuProps } from '.';

export default {
  title: `Menu`,
  component: Menu
} as Meta

export const MenuStory: Story<MenuProps> = (props) => <Menu {...props} />

MenuStory.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark'
  }
}
