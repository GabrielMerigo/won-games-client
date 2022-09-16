import { gql } from '@apollo/client';
import { BannerFragment } from 'graphql/fragments/banner';
import { GameFragment } from 'graphql/fragments/game';

export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      ...BannerFragment
    }

    newGames: games(
      where: { release_date_lte: "2022-01-01" }
      sort: "release_date:desc"
      limit: 4
    ) {
      ...GameFragment
    }

    upcomingGames: games(
      where: { release_date_gt: "2022-09-14" }
      sort: "release_date:asc"
      limit: 10
    ) {
      ...GameFragment
    }

    freeGames: games(where: { price: 0 }, sort: "release_date:desc", limit: 10) {
      ...GameFragment
    }
  }

  ${BannerFragment}
  ${GameFragment}
`;
