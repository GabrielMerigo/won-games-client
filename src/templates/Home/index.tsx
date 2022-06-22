import Footer from '../../components/Footer'
import { Container } from '../../components/Container'
import Menu from '../../components/Menu'
import { BannerProps } from '../../components/Banner'
import { GameCardProps } from '../../components/GameCard'
import { HighlightProps } from '../../components/Highlight'
import BannerSlider from '../../components/BannerSlider'
import * as S from './styles'
import ShowCase from '../../components/ShowCase'

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
}: any) => (
  <section>
    <Container>
      <Menu />
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <ShowCase  title="New Games" games={newGames} />
    </S.SectionNews>

    <ShowCase
      title="Most Popular"
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <S.SectionUpComing>
      <ShowCase title="Upcoming Games" games={upcomingGames} />
      <ShowCase highlight={upcomingHighlight} games={upcomingMoreGames} />
    </S.SectionUpComing>

    <ShowCase title="Free Games" highlight={freeHighlight} games={freeGames} />

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home
