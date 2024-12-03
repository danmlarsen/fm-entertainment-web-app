import MediaList from "@/components/MediaList";
import { getMedia } from "@/lib/firebase-service";

export default async function RecommendedMedia() {
  const recommendedData = await getMedia({
    filters: { isTrending: false },
  });

  return <MediaList data={recommendedData} />;
}
