import Base from '../Base';
import ShowCase from '../../components/ShowCase';
import Heading from '../../components/Heading';
import GameCard, { GameCardProps } from '../../components/GameCard';
import { Container } from 'components/Container';
import { HighlightProps } from '../../components/Highlight';
import { Grid } from '../../components/Grid';
import { Divider } from '../../components/Divider';

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

      <Grid>
        {games?.map((game, index) => (
          <GameCard key={`wishlist-${index}`} {...game} />
        ))}
      </Grid>

      <Divider />
    </Container>
    <ShowCase
      title="You my like these games"
      games={recommendGames}
      highlight={recommendHighlight}
    />
  </Base>
)

export default Wishlist
