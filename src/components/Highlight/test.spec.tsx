import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Highlight from './'

describe('<Highlight />', () => {
  it('should render headings and button', () => {
    const { container } = renderWithTheme(<Highlight />)
  })
})
