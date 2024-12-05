import MediaList from "@/components/MediaList";
import { getCachedMedia } from "@/lib/firebase-service";
import { cookies } from "next/headers";

export default async function BookmarkedMoviesList() {
  const cookieStore = await cookies();
  const token = cookieStore.get("firebaseAuthToken")?.value;

  const movies = await getCachedMedia({
    category: "Movie",
    token,
  });

  const bookmarkedMovies = movies.filter((movie) => movie.isBookmarked);

  return <MediaList data={bookmarkedMovies} />;
}
