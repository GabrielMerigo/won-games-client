import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import '../../../.jest/match-media-mock';

import GameCardSlider from './'

const items = [
  {
    title: 'Population Zero 1',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero 2',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x141',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero 3',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x142',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero 4',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x143',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero 5',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x144',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero 6',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x145',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  }
]

describe('<GameCardSlider />', () => {
  it('should render slider', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />);
    expect(container.querySelectorAll('.slick-slide')).toHaveLength(6)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  });

  it('should render slider with black arrows by default', () => {
    renderWithTheme(<GameCardSlider items={items} />);

    expect(screen.getByLabelText('next game')).toHaveStyle({ 'color': '#030517' })
    expect(screen.getByLabelText('previous game')).toHaveStyle({ 'color': '#030517' })
  });

  it('should render slider with white arrows', () => {
    renderWithTheme(<GameCardSlider items={items} color="white" />);

    expect(screen.getByLabelText('next game')).toHaveStyle({ 'color': '#FAFAFA' })
    expect(screen.getByLabelText('previous game')).toHaveStyle({ 'color': '#FAFAFA' })
  });
});
