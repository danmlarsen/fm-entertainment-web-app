import { MediaType } from "@/types/MediaType";
import TrendingSliderItem from "./TrendingSliderItem";

export default function TrendingSliderList({ data }: { data: MediaType[] }) {
  return (
    <ul className="absolute flex h-full items-center gap-4">
      {data.map((item) => (
        <TrendingSliderItem key={item.title} data={item} />
      ))}
    </ul>
  );
}
