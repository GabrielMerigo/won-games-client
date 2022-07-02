import GameCard, { GameCardProps } from '../../components/GameCard'
import Slider, { SliderSettings } from '../../components/Slider'
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import * as S from './styles'

export type GalleryImageProps = {
  src: string;
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
}

const settings: SliderSettings = {
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        arrows: true,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    }
  ],
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />,
}

const GallerySlider = ({ items }: GalleryProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item) => (
        <img role="button" key={item.src} src={item.src} alt={`Thumb - ${item.label}`} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default GallerySlider
