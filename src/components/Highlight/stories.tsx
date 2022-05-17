import { Meta, Story } from '@storybook/react';
import Highlight, { HighlightProps } from '.';

export default {
  title: `Highlight`,
  component: Highlight,
  args: {
    title: "Read Dead it's back",
    subtitle: "Come see john's new adventures",
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2',
    backgroundImage: '/img/banner.svg'
  }
} as Meta

export const HighlightStory: Story<HighlightProps> = (args) => <Highlight {...args} />
