import { GetStaticProps } from "next";
import GamesTemplate, { GamesTemplateProps } from '../templates/Games'
import filterItemsMock from '../components/ExploreSidebar/mock';
import gamesMock from 'components/GameCardSlider/mock';
import { initializeApollo } from "utils/apollo";
import { gql } from "@apollo/client";
import { useCallback, useEffect } from "react";

export default function GamesPage({ games, filterItems }: GamesTemplateProps) {
  const apolloClient = initializeApollo();


  useEffect(useCallback(async () => {
    const data = await apolloClient.query({ query: gql`
    query QueryGames {
      games {
        data {
          id
        }
      }
    }
  `})
  }), [])

  return <GamesTemplate games={games} filterItems={filterItems} />
}

export const getStaticSideProps: GetStaticProps = async () => {


  return {
    props: {
      // games: data,
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
