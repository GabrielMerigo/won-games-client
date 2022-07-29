
import { userEvent } from '@storybook/testing-library'
import { screen, waitFor } from '@testing-library/react'
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
  });

  it("should render with black label", () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" labelColor="black"/>)

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#030517'
    })
  });

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn();

    renderWithTheme(<Checkbox label="Checkbox" onCheck={onCheck} />);

    expect(onCheck).not.toHaveBeenCalled();
    userEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
  });

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn();

    renderWithTheme(<Checkbox label="Checkbox" onCheck={onCheck} />);

    expect(onCheck).not.toHaveBeenCalled();
    userEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    })

    expect(onCheck).toHaveBeenCalledWith(true)
  });

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn();

    renderWithTheme(<Checkbox label="Checkbox" onCheck={onCheck} isChecked />);
    userEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    })

    expect(onCheck).toHaveBeenCalledWith(false)
  });

  it('should be accessible with tab', () => {
    renderWithTheme(<Checkbox label="Checkbox" isChecked />);
    expect(document.body).toHaveFocus();
    userEvent.tab();
    expect(screen.getByRole('checkbox')).toHaveFocus();
  })

})
