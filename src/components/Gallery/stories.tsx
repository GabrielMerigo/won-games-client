import { Meta, Story } from '@storybook/react';
import Gallery, { GalleryProps } from '.';
import mockImages from './mock'

export default {
  title: `Gallery`,
  component: Gallery,
  args: {
    items: mockImages
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<GalleryProps> = (args) => (
  <div style={{ width: '115rem', margin: '0 auto' }}>
    <Gallery {...args} />
  </div>
)
