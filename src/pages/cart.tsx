import { GetServerSideProps } from "next";
import CartTemplate, { CartProps } from "../templates/Cart";
import cardsMock from 'components/PaymentOptions/mock';
import { initializeApollo } from "utils/apollo";
import { QueryRecommended } from "types/types_queries/QUERY_RECOMMENDED";
import { QUERY_RECOMMENDED } from "graphql/queries/recommended";
import { gamesMapper, highlightMapper } from "utils/mappers";

export default function Cart(props: CartProps) {
  return <CartTemplate {...props} />
}

// Não faz sentido essa página ser estática pois ela irá mudar o tempo todo
export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<QueryRecommended>({ query: QUERY_RECOMMENDED });

  return {
    props: {
      recommendedTitle: data.recommended?.section?.title,
      recommendGames: gamesMapper(data.recommended?.section?.games),
      recommendHighlight: highlightMapper(data.recommended?.section?.highlight),
      items: [],
      total: 'R$ 450,00',
      cards: cardsMock
    }
  }
}
