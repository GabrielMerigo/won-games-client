import Base from 'templates/Base'

import GameCard, { GameCardProps } from 'components/GameCard'
import ExploreSidebar, { ItemsProps } from '../../components/ExploreSidebar'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown';

import * as S from './styles'
import { Grid } from '../../components/Grid'
import { useQuery } from '@apollo/client';
import { QUERY_GAMES } from 'graphql/queries/games';
import { QueryGames, QueryGamesVariables } from 'types/types_queries/QUERY_GAMES';

export type GamesTemplateProps = {
  games?: GameCardProps[],
  filterItems: ItemsProps[],
  apolloClient?: any;
}

const GamesTemplate = ({ games, filterItems }: GamesTemplateProps) => {
  const { data } = useQuery<QueryGames, QueryGamesVariables>(QUERY_GAMES, { variables: { limit: 15 }})

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={() => { }} />
        <section>
          <Grid>
            {data?.games.map((game) => (
              <GameCard
                key={game.slug}
                title={game.name}
                slug={game.slug}
                developer={game.developers[0].name}
                img={`http://localhost:1337${game.cover!.url}`}
                price={game.price}
                />
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
