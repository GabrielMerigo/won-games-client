import { Meta, Story } from '@storybook/react';
import OrdersList, { OrdersListProps } from '.';
import mock from './mock';

export default {
  title: `Profile/OrdersList`,
  component: OrdersList,
  args: {
    items: mock
  }
} as Meta

export const Default: Story<OrdersListProps> = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <OrdersList {...args} />
  </div>
)
