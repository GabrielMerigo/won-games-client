import { screen, fireEvent } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Dropdown from './'

describe('<Dropdown />', () => {
  it('should render items and should not render content', () => {
    renderWithTheme(<Dropdown title="Click here" children="content" />);

    expect(screen.getByText(/click here/i)).toBeInTheDocument();
    expect(screen.getByText(/content/i)).toHaveStyle({
      opacity: 0
    })
  })

  it('should show content when title is clicked', () => {
    renderWithTheme(<Dropdown title="Click here" children="content" />);
    fireEvent.click(screen.getByText(/click here/i));
    expect(screen.getByText(/content/i)).toHaveStyle({
      opacity: 1
    })
  })

  it('should hide content when title is already clicked', () => {
    renderWithTheme(<Dropdown title="Click here" children="content" />);
    fireEvent.click(screen.getByText(/click here/i));
    expect(screen.getByText(/content/i)).toHaveStyle({
      opacity: 1
    })

    fireEvent.click(screen.getByText(/click here/i));
    expect(screen.getByText(/content/i)).toHaveStyle({
      opacity: 0
    })
  })
})

