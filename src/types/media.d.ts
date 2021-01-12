interface IManga {
  title: Title;
  coverImage: CoverImage;
  id: number;
  bannerImage: string;
  description: string;
}

interface ITitle {
  english: string;
  romaji: string;
}

interface ICoverImage {
  large: string;
  extraLarge: string;
}