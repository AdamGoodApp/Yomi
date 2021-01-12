export const trendingQuery = `
  query ($perPage: Int) {
    Page (perPage: $perPage) {
      media (type: MANGA sort: [TRENDING_DESC, POPULARITY_DESC]) {
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
      }
    }
  }
`

export const manga = `
  query ($id: Int) {
    Media (type: MANGA id: $id) {
      title {
        english
        romaji
      }
      coverImage {
        large
      }
      bannerImage
    }
  }
`