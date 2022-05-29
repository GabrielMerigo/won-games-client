import styled, { css } from 'styled-components'
import { CheckboxProps } from '.'


const wrapperModifers = {
  hidden: () => css`
   visibility: hidden;
  `
}

export const Wrapper = styled.div<CheckboxProps>`
  ${({ label }) => css`
    ${!!label && wrapperModifers.hidden()}
  `}
`
