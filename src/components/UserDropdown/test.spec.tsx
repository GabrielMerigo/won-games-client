import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import UserDropdown from './'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    renderWithTheme(<UserDropdown username="Gabriel" />);

    expect(screen.getByText(/gabriel/i)).toBeInTheDocument();
  })

  it('should render the menu', () => {
    renderWithTheme(<UserDropdown username="Gabriel" />)
    expect(screen.getByText(/My Profile/).parentElement).toHaveAttribute('href', '/profile')
    expect(screen.getByText(/Wishlist/).parentElement).toHaveAttribute('href', '/wishlist')
    expect(screen.getByText(/Sign out/).parentElement).toHaveAttribute('href', '/logout')
  })
})
