import { render, screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('Should render a white label by default', () => {
    renderWithTheme(<Logo />);
    expect(screen.getByAltText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('Should render a black label when color is passed', () => {
    renderWithTheme(<Logo color='black' />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('Should render a bigger logo', () => {
    renderWithTheme(<Logo size="large"/>);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })
})
