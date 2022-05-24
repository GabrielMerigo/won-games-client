import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';

import Button from './'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Buy Now</Button>)
    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 1.6rem',
      'font-size': '1.6rem'
    })

    expect(container.firstChild).toMatchSnapshot();
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Buy Now</Button>)
    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '0.8rem'
    })
  });

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Buy Now</Button>)
    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '2.4rem'
    })
  })

  it('should render a fullWidth version', () => {
    renderWithTheme(<Button fullWidth>Buy Now</Button>);
    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      width: '100%',
    })
  })

  it('should render an icon version', () => {
    renderWithTheme(<Button icon={<AddShoppingCart data-testid="icon" />}>Buy Now</Button>);

    expect(screen.getByText(/Buy Now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render button as a link', () => {
    renderWithTheme(<Button as="a" href="/link">Buy Now</Button>);

    expect(screen.getByRole('link', { name: /Buy Now/i }))
      .toHaveAttribute('href', '/link')
  });

  it('should render a minimal version', () => {
    renderWithTheme(<Button minimal>Buy Now</Button>);

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      background: 'none'
    })
  });
})
