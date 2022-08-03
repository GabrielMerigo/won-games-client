import { Meta, Story } from '@storybook/react';
import CartIcon, { CartIconProps } from '.';

export default {
  title: `CartIcon`,
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = () => <CartIcon />
export const WithNumber: Story<CartIconProps> = args => <CartIcon {...args} />
WithNumber.args = {
  quantity: 10
}
