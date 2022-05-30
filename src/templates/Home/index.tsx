import Footer from '../../components/Footer'
import { Container } from '../../components/Container'
import Menu from '../../components/Menu'
import Heading from '../../components/Heading'
import { BannerProps } from '../../components/Banner'
import { GameCardProps } from '../../components/GameCard'
import Highlight, { HighlightProps } from '../../components/Highlight'
import BannerSlider from '../../components/BannerSlider'
import GameCardSlider from '../../components/GameCardSlider'
import * as S from './styles'
import io from 'socket.io-client';

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
 }: any) => {
  const socket = io('http://localhost:4000');

  socket.on('infoEvent', (receivedInfo) => {
    console.log(receivedInfo)
  })

  function clickButton(){
    socket.emit('infoEvent', 'hello realtime connecters users');
    console.log('teste')
  }

  return (
    <section>
      <button onClick={clickButton}>tESTE</button>
      <Container>
        <Menu />
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Container>
          <Heading size="small" lineLeft lineColor="secondary" color="black">
            New Release
          </Heading>
          <GameCardSlider items={newGames} color="black" />
        </Container>
      </S.SectionNews>

      <S.SectionMostPopular>
        <Container>
          <Heading size="small" lineLeft lineColor="secondary">
            Most Popular
          </Heading>
          <Highlight {...mostPopularHighlight} />
          <GameCardSlider items={mostPopularGames} />
        </Container>
      </S.SectionMostPopular>

      <S.SectionUpComing>
        <Container>
          <Heading size="small" lineLeft lineColor="secondary">
            Up Coming
          </Heading>

          <GameCardSlider items={upcomingGames} color="white" />
          <Highlight {...upcomingHighlight} />
          <GameCardSlider items={upcomingMoreGames} color="white" />
        </Container>
      </S.SectionUpComing>

      <S.SectionFreeGames>
        <Container>
          <Heading size="small" lineLeft lineColor="secondary">
            Free Games
          </Heading>

          <Highlight {...freeHighlight} />
          <GameCardSlider items={freeGames} color="white" />
        </Container>
      </S.SectionFreeGames>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </section>
  )
}

export default Home
