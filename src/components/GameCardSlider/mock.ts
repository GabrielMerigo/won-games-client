import { GameCardProps } from "../../components/GameCard";
import { RibbonSizes } from "../../components/Ribbon"

let ribbonSize: RibbonSizes = 'small';

const GameCard: GameCardProps[] = [
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
    ribbon: '10% OFF',
    ribbonSize: ribbonSize
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
    ribbon: '10% OFF',
    ribbonSize: 'small'
  }
]

export default GameCard
