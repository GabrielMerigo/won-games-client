import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import Checkbox from './'

describe('<Checkbox />', () => {
  it('render with label', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />)

    //input a partir do papel / role
    expect(screen.getByRole('checkbox')).toBeInTheDocument();

    //input a partir da label associada
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();

    //label a partir do text
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
  })

  it("shouldn't render label ", () => {
    renderWithTheme(<Checkbox />)

    expect(screen.getByRole('checkbox')).toHaveAttribute('id', ''); // Verifica a partir do atributo do input
    expect(screen.queryByLabelText(/checkbox label/i)).not.toBeInTheDocument(); // Se verifica se há a label no documento
  })
})
