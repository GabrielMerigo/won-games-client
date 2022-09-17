import Base from 'templates/Base'

import GameCard, { GameCardProps } from 'components/GameCard'
import ExploreSidebar, { ItemsProps } from '../../components/ExploreSidebar'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown';

import * as S from './styles'
import { Grid } from '../../components/Grid'

export type GamesTemplateProps = {
  games?: GameCardProps[],
  filterItems: ItemsProps[],
  apolloClient?: any;
}

const GamesTemplate = ({ games, filterItems }: GamesTemplateProps) => {
  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={() => { }} />
        <section>
          <Grid>
            {games?.map(item => (
              <GameCard key={item.title} {...item} />
            ))}
          </Grid>

          <S.ShowMore role="button" onClick={() => { }}>
            <p>Show more</p>
            <ArrowDown size={35} />
          </S.ShowMore>
        </section>
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
