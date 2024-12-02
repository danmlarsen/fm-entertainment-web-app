import TrendingSlider from "@/components/TrendingSlider";
import MediaList from "@/components/MediaList";
import { getRecommendedMedia, getTrendingMedia } from "@/lib/firebase";

export default async function Page() {
  const { data: trendingData } = await getTrendingMedia();
  const { data: recommendedData } = await getRecommendedMedia();

  return (
    <div className="space-y-6">
      <div className="space-y-6">
        <h2>Trending</h2>
        <TrendingSlider data={trendingData} />
      </div>
      <div className="space-y-6">
        <h2>Recommended for you</h2>
        <MediaList data={recommendedData} />
      </div>
    </div>
  );
}
