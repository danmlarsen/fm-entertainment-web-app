import MediaList from "@/components/MediaList";
import { getCachedMedia } from "@/lib/firebase-service";

export default async function RecommendedMedia() {
  const recommendedData = await getCachedMedia({
    filters: { isTrending: false },
  });

  return <MediaList data={recommendedData} />;
}
