import Base from 'templates/Base'

import { GameCardProps } from 'components/GameCard'
import ExploreSidebar from 'components/ExploreSidebar'

import * as S from './styles'

export type GamesTemplateProps = {
  games?: GameCardProps[]
}

const GamesTemplate = ({ games }: GamesTemplateProps) => (
  <Base>
    <S.Main>
      <ExploreSidebar />
    </S.Main>
  </Base>
)

export default GamesTemplate
