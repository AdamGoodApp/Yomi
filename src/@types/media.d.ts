interface IManga {
  title: Title;
  coverImage: CoverImage;
  id: number;
  bannerImage: string;
  description: string;
  meanScore: number;
  favourites: number;
  genres: [string];
  startDate: IFuzzyDate;
  chapters: number;
  staff: { nodes: [IStaff] }
}

interface ITitle {
  english: string;
  romaji: string;
}

interface ICoverImage {
  large: string;
  extraLarge: string;
}

interface IFuzzyDate {
  year: number;
  month: number;
  day: number;
}

interface IStaff {
  name: { full: string }
}