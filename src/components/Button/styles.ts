import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = Pick<ButtonProps, 'size'>

const wrappersModifers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.spacings.xxsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.spacings.small};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.spacings.medium};
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size }) => css`
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0);
    color: ${theme.colors.white};
    border: 0;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};

    ${!!size && wrappersModifers[size](theme) }
  `}
`
