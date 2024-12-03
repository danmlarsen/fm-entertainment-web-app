import { getMedia } from "@/lib/firebase-service";
import TrendingSliderItem from "./TrendingSliderItem";

export default async function TrendingSlider() {
  const trendingData = await getMedia({ filters: { isTrending: true } });

  return (
    <div className="relative min-h-[140px] overflow-x-hidden md:min-h-[230px]">
      <ul className="absolute flex h-full items-center gap-4">
        {trendingData.map((item) => (
          <TrendingSliderItem key={item.title} data={item} />
        ))}
      </ul>
    </div>
  );
}
