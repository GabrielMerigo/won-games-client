import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.small} 0;
    position: relative;
  `}
`;

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
  `}
`;

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1; //Ocupar o máximo de espaço que podem
    justify-content: flex-end;

    > div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`;

type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ isOpen, theme }) => css`
    background: ${theme.colors.white};
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    opacity: ${ isOpen ? 1 : 0};
    pointer-events: ${ isOpen ? 'all' : 'none'};

    > svg {
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
      position: absolute;
    }
  `}
`;

export const MenuNav = styled.div``;

export const MenuLink = styled.a``;
