import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import FormSign from './'

describe('<FormSign />', () => {
  it('should render the form', () => {
    renderWithTheme(<FormSign />);
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Senha')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Entrar Agora' })).toBeInTheDocument();
  });

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSign />);
    expect(screen.getByText('Esqueceu sua Senha?')).toBeInTheDocument();
  });

  it('should render the text and link to sign up', () => {
    renderWithTheme(<FormSign />);
    expect(screen.getByRole('link', { name: 'Criar' })).toBeInTheDocument();
    expect(screen.getByText('Não tem uma conta?')).toBeInTheDocument();
  });

  it('should be call when I click in the link', async () => {
    renderWithTheme(<FormSign />);
    const link = screen.getByRole('link', { name: 'Criar' });
    expect(link.getAttribute('href')).toBe('/sign-up');
  });
})
