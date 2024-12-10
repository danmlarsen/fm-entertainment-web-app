import MediaList from "@/components/MediaList";
import { getCachedMedia } from "@/lib/firebase-service";

export default async function BookmarkedMoviesList({
  bookmarks,
}: {
  bookmarks: string[];
}) {
  const movies = await getCachedMedia({
    category: "Movie",
  });

  const bookmarkedMovies = movies.filter((movie) =>
    bookmarks.includes(movie.id),
  );

  return <MediaList data={bookmarkedMovies} />;
}
