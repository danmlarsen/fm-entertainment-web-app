import MediaList from "@/components/MediaList";
import { getCachedMedia } from "@/lib/firebase-service";

export default async function RecommendedMedia() {
  const recommendedData = await getCachedMedia({
    filters: { isTrending: false },
  });

  if (recommendedData.length === 0)
    return <p className="text-white/50">No recommended shows found.</p>;

  return <MediaList data={recommendedData} />;
}
