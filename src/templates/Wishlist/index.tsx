import Base from '../Base';
import ShowCase from '../../components/ShowCase';
import Heading from '../../components/Heading';
import GameCard, { GameCardProps } from '../../components/GameCard';
import { Container } from 'components/Container';
import { HighlightProps } from '../../components/Highlight';
import { Grid } from '../../components/Grid';
import { Divider } from '../../components/Divider';
import Empty from 'components/Empty';

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

      {games?.length ? (
        <Grid>
          {games?.map((game, index) => (
            <GameCard key={`wishlist-${index}`} {...game} />
          ))}
        </Grid>
      ) : (
        <Empty
          description="Your wishlist is empty..."
          title="Games added to your wishlist will appear here..."
          hasLink
        />
      )}


      <Divider />
    </Container>
    <ShowCase
      title="You may like these games"
      games={recommendGames}
      highlight={recommendHighlight}
    />
  </Base>
)

export default Wishlist
