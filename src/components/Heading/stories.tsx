import { Meta, Story } from '@storybook/react';
import Heading, { HeadingProps } from '.';

export default {
  title: `Heading`,
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const HeadingStory: Story<HeadingProps> = (args) => <Heading {...args} />

HeadingStory.args = {
  children: 'Most Populars'
}
