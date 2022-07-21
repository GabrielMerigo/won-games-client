import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ProfileMenu from './'

describe('<ProfileMenu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<ProfileMenu />);

    expect(screen.getAllByRole('paragraph')).toHaveLength(4);
    expect(screen.getByText('My Profile')).toBeInTheDocument();
    expect(screen.getByText('My Cards')).toBeInTheDocument();
    expect(screen.getByText('My Orders')).toBeInTheDocument();
    expect(screen.getByText('Sign out')).toBeInTheDocument();
  })

  it('should render the menu with an active link defined', () => {
    const { debug } = renderWithTheme(<ProfileMenu activeLink="/profile/cards" />);

    expect(screen.getByText('My Cards').parentElement).toHaveStyle({
      background: '#F231A5',
      color: '#FAFAFA'
    })
  })
})
