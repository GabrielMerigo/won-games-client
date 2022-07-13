import * as S from './styles'
import Base from '../Base';
import { Container } from 'components/Container';
import ShowCase from '../../components/ShowCase';
import Heading from '../../components/Heading';
import GameCard, { GameCardProps } from '../../components/GameCard';
import { HighlightProps } from '../../components/Highlight';

export type WishlistTemplateProps = {
  games?: GameCardProps[],
  recommendGames: GameCardProps[],
  recommendHighlight: HighlightProps
}

const Wishlist = ({ recommendGames, recommendHighlight, games }: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading
        size='medium'
        lineLeft
        color='white'
        lineColor='secondary'
      >
        Wishlist
      </Heading>

      {games?.map((game, index) => (
        <GameCard key={`wishlist-${index}`} {...game} />
      ))}

    </Container>
    <ShowCase
      title="You my like these games"
      games={recommendGames}
      highlight={recommendHighlight}
    />
  </Base>
)

export default Wishlist
