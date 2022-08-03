import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers';
import filterItemsMock from '../../components/ExploreSidebar/mock';

import Games from '.'

jest.mock('../../components/ExploreSidebar', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock ExploreSidebar"></div>
    }
  }
});

describe('<Games />', () => {
  it('should render sidebar, games cards and button show more ', () => {
    renderWithTheme(<Games filterItems={filterItemsMock} />)
  })
})
