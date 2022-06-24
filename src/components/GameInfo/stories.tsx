import { Meta, Story } from '@storybook/react';
import GameInfo, { GameInfoProps } from '.';

export default {
  title: `GameInfo`,
  component: GameInfo,
  args: {
    title: "Teste",
    description: "teste 123",
    price: "229.00"
  }
} as Meta

export const Default: Story<GameInfoProps> = (args) => <GameInfo {...args} />
