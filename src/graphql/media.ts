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