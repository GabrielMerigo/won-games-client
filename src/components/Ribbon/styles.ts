import styled, { css, DefaultTheme } from 'styled-components'
import { RibbonColors, RibbonProps } from '.'

const wrapperModifers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};
  `
}

export const Wrapper = styled.div<Omit<RibbonProps, 'children'>>`
  ${({ theme, color }) => css`
    ${!!color && wrapperModifers.color(theme, color)}
  `}

`
