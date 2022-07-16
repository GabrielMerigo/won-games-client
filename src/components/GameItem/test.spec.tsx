import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameItem from './'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x582',
  title: 'Red Dead Redemption II',
  price: 'R$ 215,00'
}

describe('<GameItem />', () => {
  it('should render the item', () => {
    renderWithTheme(<GameItem {...props} />);

    expect(screen.getByRole('heading', { name: /Red Dead Redemption II/i })).toBeInTheDocument();
    expect(screen.getByAltText(/Red Dead Redemption II/i)).toBeInTheDocument();
    expect(screen.getByText(/R\$ 215,00/i)).toBeInTheDocument();
  });

  it('should render the item with download link', () => {
    const downloadLink = 'http://link.com'

    renderWithTheme(<GameItem {...props} downloadLink={downloadLink} />);
    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` })
    ).toHaveAttribute('href', downloadLink)
  })
})
