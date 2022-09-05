import { GetStaticProps } from "next";
import GamesTemplate, { GamesTemplateProps } from '../templates/Games'
import filterItemsMock from '../components/ExploreSidebar/mock';
import { initializeApollo } from "utils/apollo";
import { QUERY_GAMES } from "graphql/queries/games";
import { QueryGames, QueryGameVariables } from "types/types_queries/QUERY_GAMES";

export default function GamesPage({ games, filterItems }: GamesTemplateProps) {
  return (<GamesTemplate games={games} filterItems={filterItems} />)
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<QueryGames, QueryGameVariables>({
    query: QUERY_GAMES,
    variables: {
      limit: 9
    }
  })

  const games = data.games.data.map((game) => ({
    title: game.attributes.name,
    developer: game.attributes.developers.data[0].attributes.name,
    slug: game.attributes.slug,
    img: `http://localhost:1337${game.attributes.cover!.data.attributes.url}`,
    price: new Intl.NumberFormat('en', {
      style: 'currency',
      currency: 'USD'
    }).format(game.attributes.price),
  }))

  return {
    props: {
      revalidate: 60,
      games,
      filterItems: filterItemsMock
    }
  }
}
