import { Meta, Story } from '@storybook/react';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';
import Button from '.';

export default {
  title: `Button`,
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
}

export const Default: Story = (args) => {
  return  <Button {...args} />
}

Default.args = {
  children: 'Buy now'
} as Meta;

export const withIcon: Story = (args) => <Button {...args} />

withIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />
} as Meta;

export const asLink: Story = (args) => <Button {...args} />

asLink.args = {
  size: 'large',
  children: 'Buy now',
  as: 'a',
  href: '/link'
} as Meta;
