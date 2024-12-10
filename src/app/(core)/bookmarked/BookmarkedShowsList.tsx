import MediaList from "@/components/MediaList";
import { getCachedMedia } from "@/lib/firebase-service";

export default async function BookmarkedShowsList({
  bookmarks,
}: {
  bookmarks: string[];
}) {
  const shows = await getCachedMedia({
    category: "TV Series",
  });

  const bookmarkedShows = shows.filter((show) => bookmarks.includes(show.id));

  return <MediaList data={bookmarkedShows} />;
}
