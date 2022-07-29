import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import Menu from './'

describe('<Menu />', () => {
  it('render test the menu', () => {
    renderWithTheme(<Menu />);

    expect(screen.getByRole('img', { name: /Won Games/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument();
  })

  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />);
    // Verificar se o menu existe em tela
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })
    // Verificar se o menu esta escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({
      opacity: 0
    })

    // quando clicar no botão de abrir o menu, verificar se ele abriu
    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    // quando clicar no botão de fechar o menu, verificar se ele fechou
    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />);

    expect(screen.queryByText(/My account/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Wishlist/i)).not.toBeInTheDocument();

    expect(screen.getByText(/Log in now/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();
  });


  it('should show wishlist and account when logged in', () => {
    renderWithTheme(<Menu username="Gabriel" />);

    expect(screen.getByText(/My account/i)).toBeInTheDocument();
    expect(screen.getByText(/Wishlist/i)).toBeInTheDocument();

    expect(screen.queryByText(/Log in now/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Sign Up/i)).not.toBeInTheDocument();
  });

})

