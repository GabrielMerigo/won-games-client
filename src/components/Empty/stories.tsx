import { Meta, Story } from '@storybook/react';
import Empty, { EmptyProps } from '.';

export default {
  title: `Empty`,
  component: Empty,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<EmptyProps> = (props) => <Empty {...props} />
Default.args = {
  title: 'a simple title',
  description: 'a simple description'
}
