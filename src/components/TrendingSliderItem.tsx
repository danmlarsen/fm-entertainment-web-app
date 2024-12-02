import Image from "next/image";
import MediaItemDetails from "./MediaItemDetails";
import BookmarkButton from "./BookmarkButton";
import PlayMediaOverlay from "./PlayMediaOverlay";
import { MediaType } from "@/types/MediaType";

export default function TrendingSliderItem({ data }: { data: MediaType }) {
  const { title, trendingThumbnails, isBookmarked } = data;

  if (!trendingThumbnails) return null;

  return (
    <li className="group relative h-[140px] w-[240px] overflow-hidden rounded-lg">
      <Image
        className="object-cover transition duration-300 group-hover:scale-110"
        src={trendingThumbnails[0]}
        alt={title}
        fill
      />
      <div className="absolute inset-0 flex items-end p-4">
        <MediaItemDetails data={data} />
      </div>
      <PlayMediaOverlay />
      <BookmarkButton isBookmarked={isBookmarked} />
    </li>
  );
}
