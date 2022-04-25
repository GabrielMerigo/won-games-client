import { render, screen } from '@testing-library/react'

import Main from './'

describe('<Main />', () => {
  it('it should render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /React Avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild?.firstChild).toMatchSnapshot()
  })

  it('it should render colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
