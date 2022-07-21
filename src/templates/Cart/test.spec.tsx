import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import itemsMock from 'components/CartList/mock'
import cardsMock from 'components/PaymentOptions/mock'

import Cart, { CartProps } from './'
import React from 'react'

const props: CartProps = {
  items: itemsMock,
  total: '$ 430,00',
  cards: cardsMock,
  recommendHighlight: highlightMock,
  recommendGames: gamesMock
}

jest.mock('../../templates/Base', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Mock Base">{children}</div>
    }
  }
});

jest.mock('../../components/CartList', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock CartList"></div>
    }
  }
});

jest.mock('../../components/PaymentOptions', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock PaymentOptions"></div>
    }
  }
});

jest.mock('../../components/ShowCase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock ShowCase"></div>
    }
  }
});

jest.mock('../../components/Empty', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Empty"></div>
    }
  }
});


describe('<Cart />', () => {
  it('should render sections', () => {
    renderWithTheme(<Cart {...props} />);

    expect(screen.getByRole('heading', { name: /my cart/i })).toBeInTheDocument();
    expect(screen.getByTestId('Mock Base')).toBeInTheDocument();
    expect(screen.getByTestId('Mock CartList')).toBeInTheDocument();
    expect(screen.getByTestId('Mock PaymentOptions')).toBeInTheDocument();
    expect(screen.getByTestId('Mock ShowCase')).toBeInTheDocument();
    expect(screen.queryByTestId('Mock Empty')).not.toBeInTheDocument();
  })

  it('should render empty section if there are no items', () => {
    renderWithTheme(<Cart {...props} items={[]} />);
    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument();
  })
})
