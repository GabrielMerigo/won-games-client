import { GetStaticProps } from "next";
import GamesTemplate, { GamesTemplateProps } from '../templates/Games'
import filterItemsMock from '../components/ExploreSidebar/mock';
import { initializeApollo } from "utils/apollo";
import { QUERY_GAMES } from "graphql/queries/games";
import { QueryGames, QueryGamesVariables } from "types/types_queries/QUERY_GAMES";

export default function Games({ games, filterItems }: GamesTemplateProps) {
  return (<GamesTemplate games={games} filterItems={filterItems} />)
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: {
      limit: 15
    }
  })

  return {
    props: {
      revalidate: 60,
      initialApolloState: apolloClient.cache.extract(),
      filterItems: filterItemsMock
    }
  }
}
