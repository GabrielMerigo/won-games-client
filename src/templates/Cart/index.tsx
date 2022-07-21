import Base from '../../templates/Base'
import Heading from '../../components/Heading'
import ShowCase from '../../components/ShowCase'

import { Container } from '../../components/Container'
import { Divider } from '../../components/Divider'

import * as S from './styles'
import { GameCardProps } from '../../components/GameCard'
import { HighlightProps } from '../../components/Highlight'
import CartList, { CartListProps } from '../../components/CartList'
import PaymentOptions, { PaymentOptionsProps } from '../../components/PaymentOptions'
import Empty from '../../components/Empty'

export type CartProps = {
  recommendGames: GameCardProps[],
  recommendHighlight: HighlightProps
} & CartListProps & Pick<PaymentOptionsProps, 'cards'>

const Cart = ({
  recommendGames,
  recommendHighlight,
  items,
  total,
  cards,
}: CartProps) => {
  const handlePayment = () => { }

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor='secondary'>My Cart</Heading>
        {items.length ? (
          <S.Content>
            <CartList items={items} total={total} />
            <PaymentOptions cards={cards} handlePayment={handlePayment} />
          </S.Content>
        ) : (
          <Empty
            title='There are no games'
            description="Go back to the store and explore great games and offers"
            hasLink
          />
        )}

        <Divider />
      </Container>

      <ShowCase
        title="You may like these games"
        games={recommendGames}
        highlight={recommendHighlight}
      />
    </Base>
  )
}

export default Cart
