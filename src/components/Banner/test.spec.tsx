import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import Banner from '.'

describe('<Banner />', () => {
  it('should render correctly', () => {
    const args =  {
      img: 'link',
      title: 'Defy death',
      subtitle: '<p>Play the new <strong>CrashLands</strong> season',
      buttonLabel: 'Buy now',
      buttonLink: '/games/defy-death'
    }

    renderWithTheme(<Banner {...args} />)

    expect(screen.getByRole('img')).toHaveAttribute('src', 'link');
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Defy death/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Play the new CrashLands season/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Buy now/i })).toBeInTheDocument()
  })
})
