import { Meta, Story } from '@storybook/react';
import ShowCase, { ShowCaseProps } from '.';
import highlightMock from '../../components/Highlight/mock';
import gamesMock from '../../components/GameCardSlider/mock';

export default {
  title: `ShowCase`,
  component: ShowCase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta;

export const Default: Story<ShowCaseProps> = (args) => <ShowCase {...args} />;

Default.args = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gamesMock
}
