import { MediaData } from "@/lib/data-service";
import TrendingSliderItem from "./TrendingSliderItem";

export default function TrendingSlider({ data }: { data: MediaData[] }) {
  return (
    <div className="relative min-h-[140px] overflow-x-hidden">
      <ul className="absolute flex h-full items-center gap-4">
        {data.map((item) => (
          <TrendingSliderItem key={item.title} data={item} />
        ))}
      </ul>
    </div>
  );
}
