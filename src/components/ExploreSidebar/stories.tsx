import { Meta, Story } from '@storybook/react';
import ExploreSidebar, { ExploreSidebarProps } from '.';
import ItemsMock from './mock';

export default {
  title: `ExploreSidebar`,
  component: ExploreSidebar,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    items: ItemsMock,
    onFilter: () => console.log('teste')
  }
} as Meta

export const Default: Story<ExploreSidebarProps> = args => <ExploreSidebar {...args} />


export const WithInitialValues: Story<ExploreSidebarProps> = args => (
  <ExploreSidebar
    {...args}
    initialValues={{
      platforms: ['windows', 'linux'],
      sort_by: 'low-to-high',
    }}
  />
);
