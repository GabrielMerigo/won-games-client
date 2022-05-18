import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import GameCard from './'

const props = {
  title: "Population Zero",
  developer: "Rockstar Games",
  img: "/img/banner-game-card.jpg",
  price: "R$ 230,00"
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />);

    expect(screen.getByRole('heading', { name: /Population Zero/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Rockstar Games/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Population Zero/i })).toBeInTheDocument()
    expect(screen.getByText('R$ 230,00')).toBeInTheDocument()
  })
})
