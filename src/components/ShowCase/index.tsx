import Highlight, { HighlightProps } from '../../components/Highlight'
import Heading from '../../components/Heading'
import * as S from './styles'
import { GameCardProps } from 'components/GameCard';
import GameCardSlider from '../../components/GameCardSlider';

export type ShowCaseProps = {
  title?: string;
  highlight?: HighlightProps;
  games?: GameCardProps[];
}

const ShowCase = ({ games, title, highlight }: ShowCaseProps) => (
  <S.Wrapper>

    {!!title && (
      <Heading size="small" lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!games && <GameCardSlider items={games} color="white" />}
  </S.Wrapper>
)

export default ShowCase
