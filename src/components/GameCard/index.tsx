import Button from '../../components/Button';
import { AddShoppingCart, FavoriteBorder, Favorite } from 'styled-icons/material-outlined';
import * as S from './styles'
import Ribbon, { RibbonColors, RibbonSizes } from '../../components/Ribbon';
import Link from 'next/link';

export type GameCardProps = {
  slug: string;
  title: string;
  developer: string;
  img: string;
  price: string;
  promotionalPrice?: string;
  favorite?: boolean;
  onFav?: () => void;
  ribbon?: React.ReactNode | string,
  ribbonColor?: RibbonColors,
  ribbonSize?: RibbonSizes
}

const GameCard = ({
  slug,
  title,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false,
  onFav,
  ribbon,
  ribbonColor,
  ribbonSize
}: GameCardProps) => (
  <S.Wrapper>
    {!!ribbon && <Ribbon color={ribbonColor} size={ribbonSize}>{ribbon}</Ribbon>}
    <Link href={`/game/${slug}`} passHref>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>
    </Link>

    <S.Content>
      <Link href={`/game/${slug}`} passHref>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
      </Link>
      <S.FavButton onClick={onFav} role="button">
        {favorite ? <Favorite aria-label="Remove from wishlist" /> : <FavoriteBorder aria-label="Add to wishlist" />}
      </S.FavButton>

      <S.BuyBox>
        {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
        <S.Price>{promotionalPrice || price}</S.Price>
        <Button as="button" icon={<AddShoppingCart />} size="small" />
      </S.BuyBox>

    </S.Content>
  </S.Wrapper>
)

export default GameCard
