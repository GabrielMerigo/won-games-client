import { GetServerSideProps } from "next";
import GamesTemplate, { GamesTemplateProps } from '../templates/Games'
import filterItemsMock from '../components/ExploreSidebar/mock';
import gamesMock from 'components/GameCardSlider/mock';

export default function GamesPage({ games, filterItems }: GamesTemplateProps) {
  return <GamesTemplate games={games} filterItems={filterItems} />
}

// Não faz sentido essa página ser estática pois ela irá mudar o tempo todo
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      games: gamesMock,
      filterItems: filterItemsMock
    }
  }
}
