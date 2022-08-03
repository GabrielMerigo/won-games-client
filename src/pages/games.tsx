import { GetServerSideProps } from "next";
import GamesTemplate, { GamesTemplateProps } from '../templates/Games'

export default function GamesPage({ games }: GamesTemplateProps) {
  return <GamesTemplate />
}

// Não faz sentido essa página ser estática pois ela irá mudar o tempo todo
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      games: []
    }
  }
}
