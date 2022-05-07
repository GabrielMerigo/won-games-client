import * as S from './styles'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import Logo from 'components/Logo'

const Menu = () => (
  <S.Wrapper>
    <S.IconWrapper>
      <MenuIcon />
    </S.IconWrapper>

    <Logo hideOnMobile />

    <div>
      <S.IconWrapper>
        <ShoppingCartIcon />
      </S.IconWrapper>
      <S.IconWrapper>
        <SearchIcon />
      </S.IconWrapper>
    </div>
  </S.Wrapper>
)

export default Menu
