import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import * as S from './styles';

import Highlight from './'

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'Buy Now',
  buttonLink: '/rdr2',
  backgroundImage: 'img/img-rd2.jpg',
  floatImage: 'img/float-image.jpg'
}

describe('<Highlight />', () => {
  it('should render headings and button', () => {
    renderWithTheme(<Highlight {...props} />);

    expect(screen.getByRole('heading', { name: /Heading 1/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Heading 2/i })).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /Buy Now/i })).toBeInTheDocument();
  });

  it('should render the background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />);

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  });


  it('should render the float image', () => {
    renderWithTheme(<Highlight {...props} floatImage="/float-image.png"/>);

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src', '/float-image.png'
    )
  });

  it('should render align right by default', () => {
    const { container } = renderWithTheme(<Highlight {...props} />);


    expect(container.firstChild).toHaveStyle({
      'grid-template-areas': "'floatimage content'"
    })

    expect(container.firstChild).toHaveStyleRule('text-align',
      'right', {
        modifier: `${S.Content}`
    })
  });

  it('should render align left', () => {
    const { container, debug } = renderWithTheme(<Highlight {...props} alignment="left" />);

    debug(container);

    expect(container.firstChild).toHaveStyle({
      'grid-template-areas': "'content floatimage'"
    })

    expect(container.firstChild).toHaveStyleRule('text-align',
      'left', {
       modifier: `${S.Content}`
    })
  });
})
