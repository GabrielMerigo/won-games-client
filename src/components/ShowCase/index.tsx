import Highlight, { HighlightProps } from '../../components/Highlight'
import Heading from '../../components/Heading'
import * as S from './styles'
import { GameCardProps } from 'components/GameCard';
import GameCardSlider from '../../components/GameCardSlider';

export type ShowCaseProps = {
  title?: string;
  highlight?: HighlightProps;
  games?: GameCardProps[];
  color?: 'black' | 'white';
}

const ShowCase = ({ games, title, highlight, color = 'white' }: ShowCaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading size="small" lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!games && <GameCardSlider items={games} color={color} />}
  </S.Wrapper>
)

export default ShowCase
