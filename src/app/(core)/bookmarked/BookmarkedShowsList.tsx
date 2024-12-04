import MediaList from "@/components/MediaList";
import { getCachedMedia } from "@/lib/firebase-service";

export default async function BookmarkedShowsList() {
  const shows = await getCachedMedia({
    category: "TV Series",
    filters: { isBookmarked: true },
  });

  return <MediaList data={shows} />;
}
