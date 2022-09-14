import { GameCardProps } from "../../components/GameCard";
import { RibbonSizes } from "../../components/Ribbon"

let ribbonSize: RibbonSizes = 'small';

const GameCard: GameCardProps[] = [
  {
    title: 'Cyberpunk',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 215,
    promotionalPrice: 215,
    ribbon: '10% OFF',
    ribbonSize: ribbonSize,
    slug: '/teste'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 215,
    promotionalPrice: 215,
    slug: '/teste'
  },
  {
    title: 'RD2',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 215,
    promotionalPrice: 215,
    ribbon: '10% OFF',
    ribbonSize: 'small',
    slug: '/teste'
  }
]

export default GameCard
