import Footer from '../../components/Footer'
import { Container } from '../../components/Container'
import Menu from '../../components/Menu'
import Heading from '../../components/Heading'
import { BannerProps } from '../../components/Banner'
import { GameCardProps } from '../../components/GameCard'
import Highlight, { HighlightProps } from '../../components/Highlight'
import BannerSlider from '../../components/BannerSlider'
import GameCardSlider from 'components/GameCardSlider'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  upcomingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
}

const Home = ({
  banners,
  freeGames,
  freeHighlight,
  mostPopularGames,
  mostPopularHighlight,
  newGames,
  upcomingGames,
  upcomingHighlight,
  upcomingMoreGames
 }: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <BannerSlider items={banners} />
    </Container>

    <Container>
      <Heading size="small" lineLeft lineColor="secondary" color="black">
        New Release
      </Heading>
      <GameCardSlider items={newGames} color="black" />
    </Container>

    <Container>
      <Heading size="small" lineLeft lineColor="secondary">
        Most Popular
      </Heading>
      <Highlight {...mostPopularHighlight} />
    </Container>

    <Container>
      <Heading size="small" lineLeft lineColor="secondary">
        Up Coming
      </Heading>

      <GameCardSlider items={upcomingGames} />
      <Highlight {...upcomingHighlight} />
      <GameCardSlider items={upcomingMoreGames} />
    </Container>

    <Container>
      <Heading size="small" lineLeft lineColor="secondary">
        Free Games
      </Heading>

      <Highlight {...freeHighlight} />
    </Container>

    <Container>
      <Footer />
    </Container>
  </section>
)

export default Home
