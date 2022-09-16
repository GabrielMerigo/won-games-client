import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components';
import '../../../.jest/match-media-mock';

import ShowCase from './'

const propsHighlight = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'Buy Now',
  buttonLink: '/rdr2',
  backgroundImage: 'img/img-rd2.jpg',
  floatImage: 'img/float-image.jpg'
}

const items = [
  {
    title: 'Population Zero 1',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 235,
    promotionalPrice: 215,
    slug: "teste"
  },
  {
    title: 'Population Zero 2',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x141',
    price: 235,
    promotionalPrice: 215,
    slug: "teste"
  },
  {
    title: 'Population Zero 3',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x142',
    price: 235,
    promotionalPrice: 215,
    slug: "teste"
  },
  {
    title: 'Population Zero 4',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x143',
    price: 235,
    promotionalPrice: 215,
    slug: "teste"
  },
  {
    title: 'Population Zero 5',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x144',
    price: 235,
    promotionalPrice: 215,
    slug: "teste"
  },
  {
    title: 'Population Zero 6',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x145',
    price: 235,
    promotionalPrice: 215,
    slug: "teste"
  }
]

describe('<ShowCase />', () => {
  // Quando tiver heading deve aparecer heading
  it('should render title when property title is passed', () => {
    renderWithTheme(<ShowCase title="Up comming" highlight={propsHighlight} games={items} />)
    expect(screen.getByText(/Up comming/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Heading 1' })).toBeInTheDocument();
    expect(document.querySelectorAll('.slick-slide')).toHaveLength(6);
  });

  it('should not render title when property title is not passed', () => {
    renderWithTheme(<ShowCase />)
    expect(screen.queryByText(/Up comming/i)).not.toBeInTheDocument();
  });


  it('should not highlight title when property highlight is not passed', () => {
    renderWithTheme(<ShowCase />)
    expect(screen.queryByRole('heading', { name: propsHighlight.title })).not.toBeInTheDocument();
  });


  it('should not render games when property games is not passed', () => {
    renderWithTheme(<ShowCase />)
    expect(document.querySelectorAll('.slick-slide')).not.toHaveLength(6);
    expect(screen.queryByRole('heading', { name: items[0].title })).not.toBeInTheDocument();
  });
})
