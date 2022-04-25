import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, React JS, Next JS and Styled-Components'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado"
    />
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Desenvolvedor de frente para tela com código"
    />
  </S.Wrapper>
)

export default Main
