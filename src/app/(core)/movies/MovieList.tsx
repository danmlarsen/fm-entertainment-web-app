import MediaList from "@/components/MediaList";
import { getCachedMedia } from "@/lib/firebase-service";

export default async function MovieList() {
  const movies = await getCachedMedia({ category: "Movie" });

  if (movies.length === 0)
    return <p className="text-white/50">No movies found.</p>;

  return <MediaList data={movies} />;
}
