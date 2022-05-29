import { Meta, Story } from '@storybook/react';
import Checkbox, { CheckboxProps } from '.';

export default {
  title: `Checkbox`,
  component: Checkbox
} as Meta

export const CheckboxStory: Story<CheckboxProps> = (args) => <Checkbox {...args} />
