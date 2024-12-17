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

  if (bookmarkedMovies.length === 0)
    return <p className="text-white/50">No bookmarked movies found.</p>;

  return <MediaList data={bookmarkedMovies} />;
}
