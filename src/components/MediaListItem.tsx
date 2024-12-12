import Image from "next/image";

import MediaItemDetails from "./MediaItemDetails";
import BookmarkButton from "./BookmarkButton";
import PlayMediaOverlay from "./PlayMediaOverlay";
import { MediaType } from "@/types/MediaType";

export default async function MediaListItem({ data }: { data: MediaType }) {
  const { id, title, thumbnail, isBookmarked } = data;

  return (
    <li className="space-y-2">
      <div className="group relative h-28 cursor-pointer overflow-hidden rounded-lg md:h-36 lg:h-44">
        <Image
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          src={thumbnail}
          alt={title}
          width={560}
          height={348}
          sizes="(max-width: 375px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw"
        />
        <PlayMediaOverlay />
        <BookmarkButton mediaId={id} isBookmarked={isBookmarked} />
      </div>
      <MediaItemDetails data={data} />
    </li>
  );
}
