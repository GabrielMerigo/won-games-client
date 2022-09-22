import { render, screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import FormProfile from './'

describe('<FormProfile />', () => {
  it('should render the profile form', () => {
    renderWithTheme(<FormProfile />)

    expect(screen.getByPlaceholderText(/type your password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/New Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument();
  })
})
