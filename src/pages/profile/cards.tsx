import CardsList, { CardsListProps } from 'components/CardsList';
import ProfileTemplate from 'templates/Profile';
import mockCards from 'components/PaymentOptions/mock';
import { GetServerSideProps } from 'next';

export default function ProfileCards({ cards }: CardsListProps) {
  return (
    <ProfileTemplate>
      <CardsList cards={cards} />
    </ProfileTemplate>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      cards: mockCards
    }
  }
}
