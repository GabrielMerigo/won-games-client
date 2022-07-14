import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Empty from './'

const props = {
  title: 'a simple title',
  description: 'a simple description'
}

describe('<Empty />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Empty {...props} hasLink />);

    expect(
      screen.getByRole('img',
        { name: /a gamer in a couch playing video game/i }
      )
    ).toBeInTheDocument();

    expect(screen.getByText(/a simple title/i)).toBeInTheDocument();
    expect(screen.getByRole('paragraph')).toHaveTextContent(/a simple description/i);
    expect(screen.getByRole('link', { name: /go back to store/i })).toHaveAttribute('href', '/')
  });

  it('should not render link when hasLink is not passed', () => {
    renderWithTheme(<Empty {...props} hasLink />);

    expect(screen.queryByRole('link', { name: /go back to store/i })).not.toBeInTheDocument();
  });
})
