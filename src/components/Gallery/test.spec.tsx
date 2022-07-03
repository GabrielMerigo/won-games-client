import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import mockItems from './mock';
import '../../../.jest/match-media-mock';

import Gallery from './'

describe('<Gallery />', () => {
  it('should render thumbnails as buttons', () => {
    renderWithTheme(<Gallery items={[mockItems[0], mockItems[1]]} />)

    expect(screen.getAllByRole('button')).toHaveLength(2);

    expect(screen.getByRole('button', { name: 'Thumb - Gallery Image 1' }))
      .toHaveAttribute('src', mockItems[0].src)

    expect(screen.getByRole('button', { name: 'Thumb - Gallery Image 2' }))
      .toHaveAttribute('src', mockItems[1].src)
  })

  it('should handle open modal', () => {
    renderWithTheme(<Gallery items={[mockItems[0], mockItems[1]]} />);
    const modal = screen.getByLabelText('modal');

    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0  })

    fireEvent.click(screen.getByRole('button', {name: /Thumb - Gallery Image 1/i}))
    expect(modal.getAttribute('aria-hidden')).toBe('false');
    expect(modal).toHaveStyle({ opacity: 1  })
  })

  it('should handle close modal when overlay or button clicked', () => {
    const { container } = renderWithTheme(<Gallery items={[mockItems[0], mockItems[1]]} />);
    const modal = screen.getByLabelText('modal');

    fireEvent.click(screen.getByRole('button', {name: /Thumb - Gallery Image 1/i}))

    fireEvent.click(screen.getByRole('button', {name: /close modal/i}));
    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0  });

    fireEvent.keyUp(container, { key: 'Escape' });
  })

  it('should handle close modal when ESC was clicked', () => {
    const { container } = renderWithTheme(<Gallery items={[mockItems[0], mockItems[1]]} />);
    const modal = screen.getByLabelText('modal');

    fireEvent.click(screen.getByRole('button', {name: /Thumb - Gallery Image 1/i}))
    fireEvent.keyUp(container, { key: 'Escape' });

    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0  });

  })
})
