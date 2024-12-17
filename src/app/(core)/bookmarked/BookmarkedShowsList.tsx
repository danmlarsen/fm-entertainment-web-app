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

  if (bookmarkedShows.length === 0)
    return <p className="text-white/50">No bookmarked shows found.</p>;

  return <MediaList data={bookmarkedShows} />;
}
