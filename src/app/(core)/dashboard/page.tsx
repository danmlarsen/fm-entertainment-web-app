import { getRecommendedMedia, getTrendingMedia } from "@/lib/data-service";

import TrendingSlider from "@/components/TrendingSlider";
import MediaList from "@/components/MediaList";

export default function Page() {
  const trendingData = getTrendingMedia();
  const recommendedData = getRecommendedMedia();

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
