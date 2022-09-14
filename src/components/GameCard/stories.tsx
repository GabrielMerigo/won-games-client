import { Story } from '@storybook/react';
import GameCard, { GameCardProps } from '.';

export default {
  title: `GameCard`,
  component: GameCard,
  args: {
    slug: 'population-zero',
    title: "Population Zero",
    developer: "Rockstar Games",
    img: "/img/banner-game-card.jpg",
    price: 230,
    promotionalPrice: 215,
    ribbon: '20% 0FF',
    ribbonColor: 'primary',
    ribbonSize: 'small'
  },
  argTypes: {
    onFav: { action: 'Clicked' }
  }
}

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)
