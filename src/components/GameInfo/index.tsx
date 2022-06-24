import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Ribbon from '../../components/Ribbon';
import * as S from './styles'

export type GameInfoProps = {
  title: string,
  description: string,
  price: string
}

const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading lineBottom color='white' lineColor='primary'>{title}</Heading>
    <S.Description>{description}</S.Description>
    <Ribbon color='primary'>{price}</Ribbon>
    <Button as="button">Add</Button>
  </S.Wrapper>
)

export default GameInfo;
