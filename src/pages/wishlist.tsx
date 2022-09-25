import Wishlist, { WishlistTemplateProps } from '../templates/Wishlist';
import { initializeApollo } from 'utils/apollo';
import { QueryRecommended } from 'types/types_queries/QUERY_RECOMMENDED';
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended';
import { gamesMapper, highlightMapper } from 'utils/mappers';
import gamesMock from '../components/GameCardSlider/mock';

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<QueryRecommended>({ query: QUERY_RECOMMENDED });

  return {
    props: {
      games: gamesMock,
      recommendedTitle: data.recommended?.section?.title,
      recommendGames: gamesMapper(data.recommended?.section?.games),
      recommendHighlight: highlightMapper(data.recommended?.section?.highlight)
    }
  }
}
