import { MediaData } from "@/lib/data-service";

import Image from "next/image";

import MediaItemDetails from "./MediaItemDetails";
import BookmarkButton from "./BookmarkButton";

export default function MediaListItem({ data }: { data: MediaData }) {
  const { title, thumbnail, isBookmarked } = data;

  return (
    <li className="space-y-2">
      <div className="relative h-28 overflow-hidden rounded-lg md:h-36">
        <Image
          className="object-cover"
          src={thumbnail.regular.small}
          alt={title}
          fill
        />
        <BookmarkButton isBookmarked={isBookmarked} />
      </div>
      <MediaItemDetails data={data} />
    </li>
  );
}
