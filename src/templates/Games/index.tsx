import Base from 'templates/Base'

import GameCard from 'components/GameCard'
import ExploreSidebar, { ItemsProps } from '../../components/ExploreSidebar'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown';

import { Grid } from '../../components/Grid'
import { useQueryGames } from 'graphql/queries/games';
import { useRouter } from 'next/router';
import { parseQueryStringToFilter, parseQueryStringToWhere } from 'utils/filter';
import { ParsedUrlQueryInput } from 'querystring';

import * as S from './styles'

export type GamesTemplateProps = {
  filterItems: ItemsProps[];
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { push, query } = useRouter();

  const { data, loading, fetchMore } = useQueryGames({
    variables: {
      limit: 15,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null
    }
  })

  function handleFilter(items: ParsedUrlQueryInput){
    push({
      pathname: '/games',
      query: items
    })

    return
  }

  function handleShowMore(){
    if(data?.games){
      fetchMore({
        variables: {
          limit: 15,
          start: data?.games.length
        }
      });
    }
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          initialValues={parseQueryStringToFilter({ queryString: query, filterItems })}
          items={filterItems}
          onFilter={handleFilter}
        />

        {loading ? (
          <p style={{ color: '#FFF'}}>Loading...</p>
        ) : (
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

            <S.ShowMore role="button" onClick={handleShowMore}>
              <p>Show more</p>
              <ArrowDown size={35} />
            </S.ShowMore>
          </section>
        )}

      </S.Main>
    </Base>
  )
}

export default GamesTemplate
