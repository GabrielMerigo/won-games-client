import styled, { css, DefaultTheme } from 'styled-components'
import { RibbonColors, RibbonProps } from '.'

const wrapperModifers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};
  `,
  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    height: 3.6rem;
  `,
  small: (theme: DefaultTheme) => css``
}

export const Wrapper = styled.div<Omit<RibbonProps, 'children'>>`
  ${({ theme, color, size }) => css`
    ${!!color && wrapperModifers.color(theme, color)}
    ${!!size && wrapperModifers[size](theme)}
  `}
`
