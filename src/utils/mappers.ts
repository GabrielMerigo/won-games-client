import { QueryHome_banners, QueryHome_newGames, QueryHome_sections_freeGames_highlight } from "types/types_queries/QUERY_HOME";

export const bannersMapper = (banners: QueryHome_banners[]) => {
  return banners.map((banner) => ({
    img: `http://localhost:1337${banner.image?.url}`,
    title: banner.title,
    subtitle: banner.subtitle,
    buttonLabel: banner.button?.label,
    buttonLink: banner.button?.link,
    ...(banner.ribbon && {
      ribbon: banner.ribbon.text,
      ribbonColor: banner.ribbon.color,
      ribbonSize: banner.ribbon.size
    })
  }))
}

export const gamesMapper = (games: QueryHome_newGames[] | null | undefined) => {
  return (games && games.map(game => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      }))
    )
}

export const highlightMapper = (highlight: QueryHome_sections_freeGames_highlight | null | undefined) => {
  return (
    highlight && {
        title: highlight.title,
        subtitle: highlight.subtitle,
        buttonLabel: highlight.buttonLabel,
        floatImage: `http://localhost:1337${highlight.floatImage?.url}`,
        buttonLink: `http://localhost:1337${highlight.buttonLink}`,
        backgroundImage: `http://localhost:1337${highlight.background?.url}`,
        alignment: highlight.alignment
    }
  )
}
