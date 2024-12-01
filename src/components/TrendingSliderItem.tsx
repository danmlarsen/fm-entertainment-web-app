import { MediaData } from "@/lib/data-service";
import Image from "next/image";
import MediaItemDetails from "./MediaItemDetails";
import BookmarkButton from "./BookmarkButton";
import PlayMediaOverlay from "./PlayMediaOverlay";

export default function TrendingSliderItem({ data }: { data: MediaData }) {
  const { thumbnail, title, isBookmarked } = data;

  if (!thumbnail.trending) return null;

  return (
    <li className="group relative h-[140px] w-[240px] overflow-hidden rounded-lg">
      <Image
        className="object-cover transition duration-300 group-hover:scale-110"
        src={thumbnail.trending.small}
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
