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

    expect(screen.getByRole('heading', { name: props.title })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: props.developer })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute('src', props.img)
    expect(screen.getByText(props.price)).toBeInTheDocument()
    expect(screen.getByLabelText(/Add to wishlist/i)).toBeInTheDocument()
  })
})
