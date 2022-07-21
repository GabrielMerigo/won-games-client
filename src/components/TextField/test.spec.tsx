
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Email } from '@styled-icons/material-outlined/Email';

import { renderWithTheme } from 'utils/tests/helpers'

import TextField from '.'
import { render } from 'react-dom';

describe('<TextField />', () => {
  it('Renders with Label', () => {
    renderWithTheme(<TextField label="Label" name="Field" id="Field" />)

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('Renders without Label', () => {
    renderWithTheme(<TextField />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('Renders with placeholder', () => {
    renderWithTheme(<TextField placeholder="hey you" />)
    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })

  it('Changes its value when typing', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        name="TextField"
        id="TextField"
      />
    );

    const input = screen.getByRole('textbox');
    const text = 'This is my new text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInput).toHaveBeenCalledTimes(text.length);
    });

    expect(onInput).toHaveBeenCalledWith(text);
  })

  it('Is accessible by tab', () => {
    renderWithTheme(
      <TextField label="TextField" name="TextField" />
    );

    const input = screen.getByLabelText('TextField');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).toHaveFocus();
  })

  it('should render with icon', () => {
    renderWithTheme(
      <TextField icon={<Email data-testid="icon" />} />
    );

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should render icon on left side by default ', () => {
    renderWithTheme(
      <TextField id="Field" icon={<Email data-testid="icon" />} />
    );

    expect(screen.getByTestId(/icon/i).parentElement).toHaveStyle({
      left: 0,
      'margin-left': '10px'
    });

    expect(screen.getByRole('textbox')).toHaveStyle({
      'margin-left': '30px'
    });
  })

  it('should render icon on right side ', () => {
    renderWithTheme(
      <TextField iconPosition="right" id="Field" icon={<Email data-testid="icon" />} />
    );

    expect(screen.getByTestId(/icon/i).parentElement).toHaveStyle({
      right: 0,
      'margin-right': '15px'
    });

    expect(screen.getByRole('textbox')).toHaveStyle({
      'margin-right': '30px'
    });
  })


  it("shouldn't use button when the one is disabled", async () => {
    const onInput = jest.fn();

    renderWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        name="TextField"
        id="TextField"
        disabled
      />
    );

    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();

    const text = 'This is my new Text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).not.toHaveValue();
    });

    expect(onInput).not.toHaveBeenCalled();
  })


  it('Renders with error', () => {
    const onInput = jest.fn();

    const { container } = renderWithTheme(<TextField
      label="TextField"
      name="TextField"
      id="TextField"
      error="error"
    />)


    expect(screen.getByText('error')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  })
})
