import Image from "next/image";
import MediaItemDetails from "./MediaItemDetails";
import BookmarkButton from "./BookmarkButton";
import PlayMediaOverlay from "./PlayMediaOverlay";
import { MediaType } from "@/types/MediaType";

export default async function TrendingMediaCarouselItem({
  data,
}: {
  data: MediaType;
}) {
  const { id, title, thumbnail, isBookmarked } = data;

  return (
    <li className="group relative h-full w-[15rem] overflow-hidden rounded-lg md:w-[29.375rem]">
      <Image
        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        src={thumbnail}
        alt={title}
        width={560}
        height={348}
      />
      <div className="pointer-events-none absolute inset-0 z-10 flex items-end p-4">
        <MediaItemDetails data={data} />
      </div>
      <PlayMediaOverlay data={data} />
      <BookmarkButton mediaId={id} isBookmarked={isBookmarked} />
    </li>
  );
}
