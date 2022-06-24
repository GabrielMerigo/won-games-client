import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from './'


const props = {
  title: 'My Game Title',
  description: 'My Game Description',
  price: '210.00'
}

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    renderWithTheme(<GameInfo {...props} />);

    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.price)).toBeInTheDocument();
    expect(screen.getByText(props.description)).toBeInTheDocument();
  })

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />);

    // to wait for the button add to cart
    expect(screen.getByRole('button', {name: 'Add' })).toBeInTheDocument();
    // to wait button wishlist
  })
})
