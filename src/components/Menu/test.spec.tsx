import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import Menu from './'

describe('<Menu />', () => {
  it('render test the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toBeInTheDocument();
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument();
  })
})

