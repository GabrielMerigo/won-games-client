import Base from '../../templates/Base'

import { Container } from '../../components/Container'
import { BannerProps } from '../../components/Banner'
import { GameCardProps } from '../../components/GameCard'
import { HighlightProps } from '../../components/Highlight'
import BannerSlider from '../../components/BannerSlider'
import ShowCase from '../../components/ShowCase'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
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
}: any) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <ShowCase title="New Games" games={newGames} color="black" />
    </S.SectionNews>

    <ShowCase
      title="Most Popular"
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <ShowCase title="Upcoming Games" games={upcomingGames} highlight={upcomingHighlight} />

    <ShowCase title="Free Games" highlight={freeHighlight} games={freeGames} />
  </Base>
)

export default Home
