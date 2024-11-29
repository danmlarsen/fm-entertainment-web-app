import { getRecommendedMedia } from "@/lib/data-service";

import MediaList from "@/components/MediaList";

export default function Page() {
  const recommendedData = getRecommendedMedia();

  return (
    <div>
      <div>DASHBOARD</div>
      <div className="space-y-6">
        <h2>Recommended for you</h2>
        <MediaList data={recommendedData} />
      </div>
    </div>
  );
}
