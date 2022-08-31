import { GetStaticProps } from "next";
import GamesTemplate, { GamesTemplateProps } from '../templates/Games'
import filterItemsMock from '../components/ExploreSidebar/mock';
import { initializeApollo } from "utils/apollo";
import { QUERY_GAMES } from "graphql/queries/games";

export default function GamesPage({ games, filterItems }: GamesTemplateProps) {
  return <GamesTemplate games={games} filterItems={filterItems} />
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: QUERY_GAMES
  })

  const games = data.games.data.map((game: any) => ({
    title: game.attributes.name,
    developer: game.attributes.developers.data[0].attributes.name,
    img: `http://localhost:1337${game.attributes.cover.data.attributes.url}`,
    price: new Intl.NumberFormat('en', {
      style: 'currency',
      currency: 'USD'
    }).format(game.attributes.price),
  }))

  return {
    props: {
      revalidate: 60,
      games: games,
      filterItems: filterItemsMock
    }
  }
}

// {
//   title: 'Cyberpunk',
//   developer: 'Rockstar Games',
//   img: 'https://source.unsplash.com/user/willianjusten/300x140',
//   price: 'R$ 235,00',
//   promotionalPrice: 'R$ 215,00',
//   ribbon: '10% OFF',
//   ribbonSize: ribbonSize
// },
