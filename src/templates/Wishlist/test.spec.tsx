import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import gamesMock from '../../components/GameCardSlider/mock';
import highlightMock from '../../components/Highlight/mock';

import Wishlist from '.'

const props = {
  games: gamesMock,
  recommendGames: gamesMock,
  recommendHighlight: highlightMock
}

jest.mock('../../components/ShowCase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock ShowCase"></div>
    }
  }
})


describe('<Wishlist />', () => {
  it('should render show case and heading', () => {
    renderWithTheme(<Wishlist {...props} />);

    expect(screen.getByText('Wishlist')).toBeInTheDocument();
    expect(screen.getAllByText(/population zero/i)).toHaveLength(3);
    expect(screen.getByTestId('Mock ShowCase')).toBeInTheDocument();
  })

  it('should render empty when there are no Games', () => {
    renderWithTheme(
      <Wishlist
        recommendGames={gamesMock}
        recommendHighlight={highlightMock}
      />
    );

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /your wishlist is empty/i })).toBeInTheDocument();
  })
})
