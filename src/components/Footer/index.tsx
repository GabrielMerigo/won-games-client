import Heading from '../../components/Heading'
import Logo from '../../components/Logo'
import Link from 'next/link'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" lineColor="secondary" size="small" lineBottom>
          Contact
        </Heading>

        <a href="mailto:gabismerigo@gmail.com">gabismerigo@gmail.com</a>
        <a href="#">+55 51 987320923</a>
      </S.Column>

      <S.Column>
        <Heading color="black" lineColor="secondary" size="small" lineBottom>
          Follow Us
        </Heading>

        <nav aria-labelledby='social media'>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">Youtube</a>
          <a href="#">Facebook</a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" lineColor="secondary" size="small" lineBottom>
          Links
        </Heading>

        <nav aria-labelledby='footer resources'>
          <Link href="/">
            <a href="#">Home</a>
          </Link>
          <Link href="/games">
            <a href="#">Store</a>
          </Link>
          <Link href="/search">
            <a href="#">Buscar</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" lineColor="secondary" size="small" lineBottom>
          Location
        </Heading>

        <span>Lorem ipsum dolor sit</span>
        <span>Lorem ipsum</span>
        <span>Lorem, ipsum dolor</span>
      </S.Column>
    </S.Content>
    <S.Copyright>Won games 2022 - All rights reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer
