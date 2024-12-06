import Image from "next/image";
import MediaItemDetails from "./MediaItemDetails";
import BookmarkButton from "../ui/BookmarkButton";
import PlayMediaOverlay from "./PlayMediaOverlay";
import { MediaType } from "@/types/MediaType";

export default function TrendingSliderItem({ data }: { data: MediaType }) {
  const { title, trendingThumbnails } = data;

  if (!trendingThumbnails) return null;

  return (
    <li className="group relative h-full w-[240px] overflow-hidden rounded-lg md:w-[470px]">
      <Image
        className="object-cover transition duration-300 group-hover:scale-110"
        src={trendingThumbnails[0]}
        alt={title}
        fill
      />
      <div className="pointer-events-none absolute inset-0 z-10 flex items-end p-4">
        <MediaItemDetails data={data} />
      </div>
      <PlayMediaOverlay />
      <BookmarkButton data={data} />
    </li>
  );
}
