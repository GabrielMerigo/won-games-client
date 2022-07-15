import { Meta, Story } from '@storybook/react';
import GameItem, { GameItemProps } from '.';

export default {
  title: `GameItem`,
  component: GameItem,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x582',
    title: 'Red Dead Redemption II',
    price: 'R$ 215,00'
  }
} as Meta

export const Default: Story<GameItemProps> = (args) => <GameItem {...args} />
