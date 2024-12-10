import MediaList from "@/components/MediaList";
import { getCachedMedia } from "@/lib/firebase-service";

export default async function MovieList() {
  const movies = await getCachedMedia({ category: "Movie" });

  return <MediaList data={movies} />;
}
