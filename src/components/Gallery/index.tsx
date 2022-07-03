import GameCard, { GameCardProps } from '../../components/GameCard'
import Slider, { SliderSettings } from '../../components/Slider'
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import * as S from './styles'
import { useEffect, useState } from 'react'
import { Close } from '@styled-icons/material-outlined/Close'

export type GalleryImageProps = {
  src: string;
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
}

const commonSettings: SliderSettings = {
  infinite: false,
  arrows: true,
  lazyLoad: 'ondemand',
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />,
}

const settings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 4,
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
  ]
}

const modalSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1
}

const Gallery = ({ items }: GalleryProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setIsOpen(false)
    }
    window.addEventListener('keyup', handleKeyUp);
    return () => window.removeEventListener('keyup', handleKeyUp);
  }, [])

  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items.map((item) => (
          <img
            role="button"
            key={item.src}
            src={item.src}
            alt={`Thumb - ${item.label}`}
            onClick={() => setIsOpen(true)}
          />
        ))}
      </Slider>

      <S.Modal isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
        <S.Close role="button" aria-label="close modal" onClick={() => setIsOpen(false)}>
          <Close size={40} />
        </S.Close>

        <S.Content>
          <Slider settings={modalSettings}>
            {items.map((item, index) => (
              <img
                key={`gallery - ${index}`}
                src={item.src}
                alt={item.label}
              />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.Wrapper>
  )
}

export default Gallery
