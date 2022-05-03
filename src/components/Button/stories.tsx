import { Meta, Story } from '@storybook/react';
import Button from '.';

export default {
  title: `Button`,
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const ButtonStory: Story = (args) => <Button {...args} />

ButtonStory.args = {
  children: 'Buy now'
}

