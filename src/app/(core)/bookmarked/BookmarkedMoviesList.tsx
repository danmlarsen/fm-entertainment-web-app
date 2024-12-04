import MediaList from "@/components/MediaList";
import { getCachedMedia } from "@/lib/firebase-service";

export default async function BookmarkedMoviesList() {
  const movies = await getCachedMedia({
    category: "Movie",
    filters: { isBookmarked: true },
  });

  return <MediaList data={movies} />;
}
