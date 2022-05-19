import { fireEvent, screen } from '@testing-library/react'
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

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />);

    const price = screen.getByText(props.price)
    expect(price).not.toHaveStyle({'text-decoration': 'line-through' });
    expect(price).not.toHaveStyle({'color': '#8F8F8F' });
    expect(price).toHaveStyle({'background-color': '#3CD3C1'});
  });

  it('should render a line through in price when promotional', () => {
    renderWithTheme(<GameCard promotionalPrice="150,00" {...props} />);

    expect(screen.getByText(/230,00/i)).toHaveStyle({'text-decoration':'line-through'});
    expect(screen.getByText(/230,00/i)).not.toHaveStyle({'background-color':'#3CD3C1'});
    expect(screen.getByText(/150,00/i)).not.toHaveStyle({'text-decoration':'line-through' });
  });


  it('should render a filled favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />);

    expect(screen.queryByLabelText(/Add to wishlist/i)).not.toBeInTheDocument()
    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  });

  it('should call onFav method when Favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />);

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled();
  });
})
