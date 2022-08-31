import { gql } from '@apollo/client';

export const QUERY_GAMES = gql`
  query QueryGames {
    games {
      data {
        id
        attributes {
          name
          price
          release_date
          slug
          cover {
            data {
              attributes {
                url
              }
            }
          }
          developers {
            data {
              attributes {
                name
              }
            }
          }
          price
          description
        }
      }
    }
  }
`
