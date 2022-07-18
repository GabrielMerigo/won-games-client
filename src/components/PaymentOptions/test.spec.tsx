import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import mockCards from './mock';

import PaymentOptions from './'
import userEvent from '@testing-library/user-event';

describe('<PaymentOptions />', () => {
  it('should render the saved card options and the add new card options', () => {
    renderWithTheme(<PaymentOptions cards={mockCards} />);

    expect(screen.getByLabelText(/4325/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/4326/i)).toBeInTheDocument();
    expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument();
  });

  it('should handle select card when clicking on the label', async () => {
    renderWithTheme(<PaymentOptions cards={mockCards} />);

    userEvent.click(screen.getByLabelText(/4325/i))

    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /4325/i })).toBeChecked();
    })
  });

  it('should not call handlePayment when button is disabled', () => {
    const handlePayment = jest.fn();
    renderWithTheme(<PaymentOptions handlePayment={handlePayment} />);
    userEvent.click(screen.getByRole('button', { name: /buy now/i }))
    expect(handlePayment).not.toBeCalled();
  })

  it('should call handlePayment when credit card is selected', async () => {
    const handlePayment = jest.fn();
    renderWithTheme(<PaymentOptions cards={mockCards} handlePayment={handlePayment} />);

    userEvent.click(screen.getByLabelText(/4325/));
    userEvent.click(screen.getByRole('button', { name: /buy now/i }));

    await waitFor(() => {
      expect(handlePayment).toHaveBeenCalled();
    });
  })
})
