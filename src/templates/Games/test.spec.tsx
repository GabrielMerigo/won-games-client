import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers';
import filterItemsMock from '../../components/ExploreSidebar/mock';
import gamesMock from '../../components/GameCardSlider/mock';

import Games from '.'
import React from 'react';

jest.mock('templates/Base', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Mock Base">
        {children}
      </div>
    }
  }
});

jest.mock('../../components/ExploreSidebar', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock ExploreSidebar"></div>
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
});

describe('<Games />', () => {
  it('should render sidebar, games cards and button show more ', () => {
    renderWithTheme(<Games games={[gamesMock[0]]} filterItems={filterItemsMock} />);

    expect(screen.getByTestId('Mock ExploreSidebar')).toBeInTheDocument();
    expect(screen.getAllByTestId('Mock GameCard')).toHaveLength(1);
    expect(screen.getByRole('button', { name: /show more/i })).toBeInTheDocument();
  })
})
