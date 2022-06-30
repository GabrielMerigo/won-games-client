import { renderWithTheme } from '../../utils/tests/helpers';
import { screen } from '@testing-library/react'

import Auth from './index';

describe('<Auth />', () => {
  it('should render logos, title, subtitle and children', () => {
    renderWithTheme(
      <Auth title="teste">
        <input type="text" />
      </Auth>
    );

    //Verificar se tem duas logos
    expect(screen.getAllByLabelText('Won Games')).toHaveLength(2);
    //Verificar se tem o heading principal do banner
    expect(screen.getByRole('heading', { name: 'Seus jogos favoritos em um só lugar' })).toBeInTheDocument();
    //Verifica se tem o subtitle
    expect(screen.getByText(/WON/)).toBeInTheDocument();
    //Verifica se tem o title do content
    expect(screen.getByRole('heading', { name: 'teste' })).toBeInTheDocument()
    //Verifica se o children tá sendo renderizado
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  })
})
