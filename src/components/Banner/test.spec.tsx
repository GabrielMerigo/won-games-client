import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import Banner from '.'

const args =  {
  img: 'link',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render correctly', () => {

    const { container } = renderWithTheme(<Banner {...args} />)

    expect(screen.getByRole('img')).toHaveAttribute('src', 'link');
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Defy death/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Play the new CrashLands season/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Buy now/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a Ribbon', () => {
    renderWithTheme(<Banner {...args} ribbon="My Ribbon" ribbonSize="small" ribbonColor="secondary" />);

    const ribbon = screen.getByText(/My Ribbon/i);

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' });
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
  });

  it('should render a normal Ribbon with secondary color as default', () => {
    renderWithTheme(<Banner {...args} ribbon="20% OFF" />);
  });
})
