import Home, { HomeTemplateProps } from '../templates/Home'
import bannersMock from '../components/BannerSlider/mock';
import gamesMock from '../components/GameCardSlider/mock'
import highlightMock from '../components/Highlight/mock'
import { gql, useQuery } from '@apollo/client';

export default function Index(props: HomeTemplateProps) {
  const { data: response } = useQuery(gql`
    query getCategories {
        categories {
          data {
            attributes {
              name
              slug
            }
		      }
        }
      }
  `)

  console.log(response.categories.data)


  return (
    <Home {...props} />
  );
}

export function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      upcomingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighlight: highlightMock
    }
  }
}
