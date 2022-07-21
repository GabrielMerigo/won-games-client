import { GetServerSideProps } from "next";
import CartTemplate, { CartProps } from "../templates/Cart";
import gamesMock from '../components/GameCardSlider/mock';
import highlightMock from '../components/Highlight/mock';
import itemsMock from 'components/CartList/mock'
import cardsMock from 'components/PaymentOptions/mock';

export default function Cart(props: CartProps) {
  return <CartTemplate {...props} />
}

// Não faz sentido essa página ser estática pois ela irá mudar o tempo todo
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      recommendGames: gamesMock,
      recommendHighlight: highlightMock,
      items: [],
      total: 'R$ 450,00',
      cards: cardsMock
    }
  }
}
