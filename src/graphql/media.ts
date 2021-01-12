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