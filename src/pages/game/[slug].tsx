import { GetStaticPaths, GetStaticProps } from 'next'
import Game, { GameTemplateProps } from '../../templates/Game/'
import galleryMock from '../../components/Gallery/mock';
import gamesMock from '../../components/GameCardSlider/mock';
import highlightMock from '../../components/Highlight/mock';
import { useRouter } from 'next/router';
import { initializeApollo } from 'utils/apollo';
import { QueryGames, QueryGameVariables } from 'types/types_queries/QUERY_GAMES';
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries/games';

const apolloClient = initializeApollo();

export default function Index(props: GameTemplateProps) {
  const router = useRouter();
  console.log(props.data)
  if (router.isFallback) return null;

  return (
    <h1>teste</h1>
    // <Game {...props} />
  )
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<QueryGames, QueryGameVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  });

  const paths = data.games.data.map(game => ({
    params: { slug: game.attributes.slug }
  }))

  return { paths, fallback: true };
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query({
    query: QUERY_GAME_BY_SLUG,
    variables: {
      slug: `${params?.slug}`
    }
  });

  // if (!data.games.length) {
  //   return { notFound: true }
  // }

  console.log(data.games.data[0].attributes, 'teste')

  return {
    props: {
      data
    }
  }
}

// revalidade: 60,
//       cover: `http://localhost:1337/`,
//       gameInfo: {
//         title: 'Cyberpunk 2077',
//         price: '59.00',
//         description:
//           'Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality'
//       },
//       gallery: galleryMock,
//       details: {
//         developer: 'CD PROJEKT RED',
//         releaseDate: '2020-12-10T23:00:00',
//         platforms: ['windows'],
//         publisher: 'CD PROJEKT RED',
//         rating: 'BR18',
//         genres: ['Action', 'Role-playing']
//       },
//       upcomingGames: gamesMock,
//       upcomingHighlight: highlightMock,
//       recommendGames: gamesMock
