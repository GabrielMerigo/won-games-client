import * as S from './styles';
import { useState } from 'react';
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2';
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search';
import Logo from '../../components/Logo';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import Button from '../Button/index';
import MediaMatch from '../../components/MediaMatch';
import Link from 'next/link';
import CartDropdown from 'components/CartDropdown';
import CartIcon from 'components/CartIcon';
import UserDropdown from 'components/UserDropdown';

export type MenuProps = {
  username?: string;
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="open menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/" passHref>
          <a href="">
            <Logo hideOnMobile />
          </a>
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink href="#">Home</S.MenuLink>
          </Link>
          <Link href="/games" passHref>
            <S.MenuLink href="#">Explore</S.MenuLink>
          </Link>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="search" />
        </S.IconWrapper>

        <S.IconWrapper>
          <MediaMatch greaterThan="medium">
            <CartDropdown />
          </MediaMatch>
          <MediaMatch lessThan="medium">
            <Link href="/cart">
              <a><CartIcon /></a>
            </Link>
          </MediaMatch>
        </S.IconWrapper>

        {!username ? (
          <MediaMatch greaterThan="medium">
            <Link href="/sign-in" passHref>
              <Button>Sign in</Button>
            </Link>
          </MediaMatch>
        ) : (
          <UserDropdown username={username} />
        )}
      </S.MenuGroup>


      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="close menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink href="#">Home</S.MenuLink>
          </Link>
          <Link href="/games" passHref>
            <S.MenuLink href="#">Explore</S.MenuLink>
          </Link>
          {!!username && (
            <>
              <Link href="/profile/me">
                <S.MenuLink href="#">My account</S.MenuLink>
              </Link>
              <Link href="/wishlist">
                <S.MenuLink href="#">Wishlist</S.MenuLink>
              </Link>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Link href="/sign-in" passHref>
              <Button role="link" fullWidth size="large" as="a">
                Sign in
              </Button>
            </Link>
            <span>or</span>
            <Link href="/sign-up" passHref>
              <S.CreateAccount title="Sign Up">Sign Up</S.CreateAccount>
            </Link>
          </S.RegisterBox>
        )}

      </S.MenuFull>
    </S.Wrapper >
  )
}

export default Menu
