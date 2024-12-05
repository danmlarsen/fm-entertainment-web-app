import MediaList from "@/components/MediaList";
import { getCachedMedia } from "@/lib/firebase-service";
import { cookies } from "next/headers";

export default async function BookmarkedShowsList() {
  const cookieStore = await cookies();
  const token = cookieStore.get("firebaseAuthToken")?.value;

  const shows = await getCachedMedia({
    category: "TV Series",
    token,
  });

  const bookmarkedShows = shows.filter((show) => show.isBookmarked);

  return <MediaList data={bookmarkedShows} />;
}
