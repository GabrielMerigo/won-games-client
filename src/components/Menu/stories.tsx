import { Meta, Story } from '@storybook/react';
import Menu, { MenuProps } from '.';

export default {
  title: `Menu`,
  component: Menu
} as Meta

export const Default: Story<MenuProps> = (props) => <Menu {...props} />

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark'
  }
}
