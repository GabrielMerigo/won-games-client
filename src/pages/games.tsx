import { GetStaticProps } from "next";
import GamesTemplate, { GamesTemplateProps } from '../templates/Games'
import filterItemsMock from '../components/ExploreSidebar/mock';
import { initializeApollo } from "utils/apollo";
import { QUERY_GAMES } from "graphql/queries/games";
import { QueryGames, QueryGamesVariables } from "types/types_queries/QUERY_GAMES";
import { useQuery } from "@apollo/client";

export default function Games({ games, filterItems }: GamesTemplateProps) {
  // const { data, loading, error } = useQuery<QueryGames, QueryGamesVariables>(QUERY_GAMES, { variables: { limit: 15 }})

  return (<GamesTemplate games={games} filterItems={filterItems} />)
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: {
      limit: 9
    }
  })

  const games = data.games.map((game) => ({
    title: game.name,
    slug: game.slug,
    developer: game.developers[0].name,
    img: `http://localhost:1337${game.cover!.url}`,
    price: game.price
  }))

  return {
    props: {
      revalidate: 60,
      games,
      filterItems: filterItemsMock
    }
  }
}
