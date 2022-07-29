import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers';
import bannersMock from '../../components/BannerSlider/mock';
import gamesMock from '../../components/GameCardSlider/mock'
import highlightMock from '../../components/Highlight/mock'
import '../../../.jest/match-media-mock';

import Home from './'

const props = {
  banners: [bannersMock[0]],
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcomingGames: [gamesMock[0]],
  upcomingHighlight: highlightMock,
  upcomingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0], gamesMock[1]],
  freeHighlight: highlightMock
}

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Contact/i })).toBeInTheDocument();
  })

  it('should render the sections', () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByRole('heading', { name: /New Release/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Most Popular/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Up Coming/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Free Games/i })).toBeInTheDocument();
  })


  it('should render 5 cards of games', () => {
    renderWithTheme(<Home {...props} />);
    expect(screen.getAllByAltText(/population zero/i)).toHaveLength(5);
  })

  it('should render 3 highlights', () => {
    renderWithTheme(<Home {...props} />);
    expect(screen.getAllByText(/Read Dead it's back/i)).toHaveLength(3);
  })
})
