import { Meta, Story } from '@storybook/react';
import PaymentOptions, { PaymentOptionsProps } from '.';

import cardsMock from './mock';

export default {
  title: `PaymentOptions`,
  component: PaymentOptions,
  args: {
    cards: cardsMock
  },
  argTypes: {
    handlePayment: {
      action: 'clicked'
    },
  }
} as Meta

export const Default: Story<PaymentOptionsProps> = (args) => (
  <PaymentOptions {...args} />
)
