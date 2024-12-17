import MediaList from "@/components/MediaList";
import { getCachedMedia } from "@/lib/firebase-service";

export default async function ShowList() {
  const shows = await getCachedMedia({ category: "TV Series" });

  if (shows.length === 0)
    return <p className="text-white/50">No shows found.</p>;

  return <MediaList data={shows} />;
}
