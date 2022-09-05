type QueryGamesDevelopers = {
  __typename: string,
  attributes: {
    __typename: string,
    name: string
  }
}

type QueryGamesCover = {
  __typename: string,
  attributes: {
    __typename: string,
    url: string
  }
}

type AttributeGames = {
  __typename: string,
  name: string,
  price: number,
  release_date: number,
  slug: string,
  cover?: {
    __typename: string,
    data: QueryGamesCover
  },
  developers: {
    __typename: string,
    data: QueryGamesDevelopers[]
  },
  description: string
}

type QueryGameData = {
  __typename: string,
  id: string,
  attributes: AttributeGames
}

export type QueryGames = {
  games: {
    __typename: string,
    data: QueryGameData[],
    meta: {
      __typename: string,
      pagination: {
        __typename: string,
        total: number,
        page: number
      }
    }
  }
}

export type QueryGameVariables = {
  limit: number
}
