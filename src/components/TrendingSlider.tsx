import TrendingSliderItem from "./TrendingSliderItem";
import { MediaType } from "@/types/MediaType";

export default function TrendingSlider({ data }: { data: MediaType[] }) {
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
