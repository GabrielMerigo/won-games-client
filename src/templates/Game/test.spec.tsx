import Game, { GameTemplateProps } from '.'
import { screen, waitFor } from '@testing-library/react'

import galleryMock from '../../components/Gallery/mock'
import gameInfoMock from '../../components/GameInfo/mock'
import gameDetailsMock from '../../components/GameDetails/mock'
import gamesMock from '../../components/GameCardSlider/mock'
import highlightMock from '../../components/Highlight/mock'
import { GameDetailsProps } from 'components/GameDetails'
import { renderWithTheme } from 'utils/tests/helpers'
import { executionAsyncId } from 'async_hooks'

const props: GameTemplateProps = {
  cover: 'bg-image.jpg',
  gameInfo: gameInfoMock,
  gallery: galleryMock,
  description: `<p>Custom HTML</p>`,
  details: gameDetailsMock as GameDetailsProps,
  upcomingGames: gamesMock,
  upcomingHighlight: highlightMock,
  recommendGames: gamesMock
}

jest.mock('../../components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Menu"></div>
    }
  }
});


jest.mock('../../components/GameInfo', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock GameInfo"></div>
    }
  }
});

jest.mock('../../components/Gallery', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Gallery"></div>
    }
  }
});

jest.mock('../../components/GameCard', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock GameCard"></div>
    }
  }
})

jest.mock('../../components/Highlight', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Highlight"></div>
    }
  }
})

jest.mock('../../components/ShowCase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock ShowCase"></div>
    }
  }
})


describe('<Game />', () => {
  it('should render template with components', () => {
    renderWithTheme(<Game {...props} />)

    expect(screen.getByTestId('Mock GameInfo')).toBeInTheDocument();
    expect(screen.getByTestId('Mock Gallery')).toBeInTheDocument();
    expect(screen.getAllByTestId('Mock ShowCase')).toHaveLength(2);
    expect(screen.getByText(/custom HTML/i)).toBeInTheDocument();
  });

  it('should not render the gallery if no images', () => {
    renderWithTheme(<Game {...props} gallery={undefined} />)

    expect(screen.queryByTestId('Mock Gallery')).not.toBeInTheDocument();
  });

  it('should not render the gallery when is mobile', () => {
    renderWithTheme(<Game {...props} />);

    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyle({ display: 'none' });
    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyleRule(
      'display',
      'block',
      {
        media: '(min-width: 768px)'
      }
    );
  })

  it('shoould render the cover image', () => {
    renderWithTheme(<Game {...props} />);

    const cover = screen.getByRole('image', { name: /cover/i })

    expect(cover).toHaveStyle({
      backgroundImage: 'url(bg-image.jpg)',
      height: '39.5rem'
    })

    expect(cover).toHaveStyleRule(
      'height',
      '70rem',
      {
        media: '(min-width: 768px)'
      }
    )

    // max-width: quando a largura ultrapassa o valor setado de max-width, ele irá buscar outra media query
    // min-width: quando a largura chegar no valor setado, irá executar o bloco de código da media query
    expect(cover).toHaveStyleRule(
      'clip-path',
      'polygon(0 0,100% 0,100%,100%,0 85%)',
      {
        media: '(min-width: 768px)'
      }
    )
  })
})
