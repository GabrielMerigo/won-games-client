
import styled, { css } from 'styled-components';

const wrapperModifers = {
  left: () => css`
    left: 0;
    margin-left: 10px;
  `,
  right: () => css`
    right: 0;
    margin-right: 15px;
  `
}

type IconPositionProps = { iconPosition: 'right' | 'left' }

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};
    position: relative;

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;

    ${iconPosition === 'right'
      ? css`margin-right: 30px;`
      : css`margin-left: 30px;`
    };

  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`;



export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    width: 3rem;
    color: ${theme.colors.gray};
    margin-left: ${theme.spacings.xxsmall};
    margin-top: 0.4rem;
    position: absolute;

    ${iconPosition === 'left' && wrapperModifers.left()}
    ${iconPosition === 'right' && wrapperModifers.right()}

    & > svg {
      width: 100%;
    }
  `}
`;

export const Wrapper = styled.div``;
