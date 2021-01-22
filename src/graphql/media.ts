export const mangaShort = `
  id
  coverImage {
    large
  }
  title {
    english
    romaji
  }
`

export const mangaFull = `
  id
  title {
    english
    romaji
  }
  coverImage {
    large
    extraLarge
  }
  bannerImage
  description(asHtml: false)
  meanScore
  favourites
  genres
  startDate {
    year
    month
    day
  }
  chapters
  staff(sort: FAVOURITES_DESC) {
    nodes {
      name {
        full
      }
    }
  }
  reviews(sort: UPDATED_AT_DESC, limit: 10) {
    nodes {
      id
      summary
      score
      user {
        name
      }
      createdAt
    }
  }
  recommendations(perPage: 20, sort: RATING_DESC) {
    nodes {
      mediaRecommendation {
       ${mangaShort}
      }
    }
  }
`

export const trendingQuery = `
  query ($perPage: Int) {
    Page (perPage: $perPage) {
      media (type: MANGA sort: [TRENDING_DESC, POPULARITY_DESC]) {
        ${mangaShort}
      }
    }
  }
`

export const mangaQuery = `
  query ($id: Int) {
    Media (type: MANGA id: $id) {
      ${mangaFull}
    }
  }
`

export const getMangaChapters = `
  query($id: Int!) {
    getMangaChapters(mangaId: $id){
      chapters {
        id
        chapter
        title
        language
      }
    }
  }
`

export const searchQuery = `
  query ($perPage: Int, $term: String) {
    Page (perPage: $perPage) {
      media (type: MANGA sort: [POPULARITY_DESC], search: $term) {
        ${mangaShort}
      }
    }
  }
`

// Hack around since anilist graphql returns array with trailing comma which graphql does not permit for variables
export const getLibrary = (ids: [Number]) => `
  query ($perPage: Int) {
    Page(perPage: $perPage) {
      media(type: MANGA, id_in: [${ids}]) {
        ${mangaShort}
      }
    }
  }
`