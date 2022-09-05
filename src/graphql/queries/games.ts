import { gql } from '@apollo/client';

export const QUERY_GAMES = gql`
  query QueryGames ($limit: Int!) {
    games (pagination: { limit: $limit }) {
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
      meta {
        pagination {
          total
          page
        }
      }
    }
  }
`;

export const QUERY_GAME_BY_SLUG = gql`
  query QueryGameBySlug($slug: String!) {
    games (filters: { slug: {eq: $slug }}) {
      data {
        id
        attributes {
          name
          short_description
          description
          price
          rating
          release_date
          cover {
            data {
              attributes {
                src: url
              }
            }
          }
          gallery {
            data {
              attributes {
                src: url
                label: alternativeText
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
          publisher {
            data {
              attributes {
                name
              }
            }
          }
          categories {
            data {
              attributes {
                name
              }
            }
          }
          platforms {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;
