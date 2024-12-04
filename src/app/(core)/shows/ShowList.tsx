import MediaList from "@/components/MediaList";
import { getCachedMedia } from "@/lib/firebase-service";

export default async function ShowList() {
  const shows = await getCachedMedia({ category: "TV Series" });

  return <MediaList data={shows} />;
}
