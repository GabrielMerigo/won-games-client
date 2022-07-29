import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignUp from './'

describe('<FormSignUp />', () => {
  it('should render the form sign up', () => {
    renderWithTheme(<FormSignUp />);

    expect(screen.getByPlaceholderText('Nome Completo')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Senha')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Confirmar Senha')).toBeInTheDocument();
  })

  it('should render the button sign up', () => {
    renderWithTheme(<FormSignUp />);
    expect(screen.getByRole('button', { name: 'Criar Conta' })).toBeInTheDocument();
  });

  it('should render the link and the text about sign-in', () => {
    renderWithTheme(<FormSignUp />);

    expect(screen.getByText('Já tem uma conta?')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Entrar' })).toBeInTheDocument();
  })
})
