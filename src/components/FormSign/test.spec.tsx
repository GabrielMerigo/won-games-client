import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import FormSign from './'

describe('<FormSign />', () => {
  it('should render the form', () => {
    renderWithTheme(<FormSign />)
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Senha')).toBeInTheDocument();
  })

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSign />);
    expect(screen.getByRole('link', { name: 'Sign Up' }))
  })

  it('should render the text and link to sign up', () => {
    // text
    // link
  })
})
