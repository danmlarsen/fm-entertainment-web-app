import { getCachedMedia } from "@/lib/firebase-service";
import TrendingSliderList from "./TrendingSliderList";

export default async function TrendingSlider() {
  const trendingData = await getCachedMedia({ filters: { isTrending: true } });

  return (
    <div className="relative min-h-[140px] overflow-x-hidden md:min-h-[230px]">
      <TrendingSliderList data={trendingData} />
    </div>
  );
}
