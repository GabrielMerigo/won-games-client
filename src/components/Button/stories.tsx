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

export const ButtonStory: Story = (props) => {
  return  <Button {...props} />
}

ButtonStory.args = {
  children: 'Buy now'
} as Meta;

export const withIcon: Story = (props) => <Button {...props} />

withIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />
} as Meta;
