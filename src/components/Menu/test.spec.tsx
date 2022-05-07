import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import Menu from './'

describe('<Menu />', () => {
  it('render test the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByRole('img', { name: /Won Games/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument();
  })

  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />);

    // Selecionar o nosso MenuFull
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })
    // Verificar se o menu esta escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({
      opacity: 0
    })

    // Clicar no botão de abrir o menu e verificar se ele abriu
    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')

    // Clicar no botão de fechar o menu e verificar se ele fechou

  })
})

