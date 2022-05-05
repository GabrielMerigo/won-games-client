import { Meta, Story } from '@storybook/react';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';
import Button from '.';

export default {
  title: `Button`,
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  }
}

export const ButtonStory: Story = (args) => {
  return  <Button {...args} />
}

ButtonStory.args = {
  children: 'Buy now'
}

export const withIcon: Story = (args) => <Button {...args} />

withIcon.args = {
  children: 'Buy now',
  icon: <AddShoppingCart />
}
