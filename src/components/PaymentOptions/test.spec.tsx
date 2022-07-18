import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import mockCards from './mock';

import PaymentOptions from './'

describe('<PaymentOptions />', () => {
  it('should render the saved card options and the add new card options', () => {
    renderWithTheme(<PaymentOptions cards={mockCards} handlePayment={jest.fn} />);

    expect(screen.getByLabelText(/4325/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/4326/i)).toBeInTheDocument();
    expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument();
  });
})
