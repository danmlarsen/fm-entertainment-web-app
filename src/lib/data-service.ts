import data from "@/assets/data.json";

export type MediaData = (typeof data)[0];

export const getRecommendedMedia = () =>
  data.filter((media) => !media.isTrending);
export const getTrendingMedia = () => data.filter((media) => media.isTrending);
export const getMovies = () =>
  data.filter((media) => media.category === "Movie");
export const getShows = () =>
  data.filter((media) => media.category === "TV Series");
export const getBookmarked = () => data.filter((media) => media.isBookmarked);
