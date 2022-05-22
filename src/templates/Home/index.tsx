import Footer from '../../components/Footer'
import { Container } from '../../components/Container'
import Menu from '../../components/Menu'
import Heading from '../../components/Heading'

const Home = () => (
  <section>
    <Container>
      <Menu />
    </Container>

    <Container>
      <Heading size="small" lineLeft lineColor="secondary" color="black">
        New Release
      </Heading>
    </Container>

    <Container>
      <Heading size="small" lineLeft lineColor="secondary">
        Most Popular
      </Heading>
    </Container>

    <Container>
      <Heading size="small" lineLeft lineColor="secondary">
        Up Coming
      </Heading>
    </Container>

    <Container>
      <Heading size="small" lineLeft lineColor="secondary">
        Free Games
      </Heading>
    </Container>

    <Container>
      <Footer />
    </Container>
  </section>
)

export default Home
