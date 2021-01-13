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