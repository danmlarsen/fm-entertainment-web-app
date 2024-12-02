export type MediaType = {
  id: string;
  title: string;
  year: number;
  category: string;
  rating: string;
  regularThumbnails: [small: string, medium: string, large: string];
  trendingThumbnails?: [small: string, large: string];
  isTrending: boolean;
  isBookmarked: boolean;
};
