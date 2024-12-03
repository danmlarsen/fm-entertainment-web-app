import Image from "next/image";

import MediaItemDetails from "./MediaItemDetails";
import BookmarkButton from "../ui/BookmarkButton";
import PlayMediaOverlay from "./PlayMediaOverlay";
import { MediaType } from "@/types/MediaType";

export default function MediaListItem({ data }: { data: MediaType }) {
  const { title, regularThumbnails, isBookmarked } = data;

  const [smallThumbnail, mediumThumbnail, largeThumbnail] = regularThumbnails;

  return (
    <li className="space-y-2">
      <div className="group relative h-28 cursor-pointer overflow-hidden rounded-lg md:h-36 lg:h-44">
        <picture>
          <source media="(max-width: 768px)" srcSet={smallThumbnail}></source>
          <source media="(max-width: 1024px)" srcSet={mediumThumbnail}></source>
          <Image
            className="object-cover transition duration-300 group-hover:scale-110"
            src={largeThumbnail}
            alt={title}
            fill
            sizes="(max-width: 375px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw"
          />
        </picture>
        <PlayMediaOverlay />
        <BookmarkButton isBookmarked={isBookmarked} />
      </div>
      <MediaItemDetails data={data} />
    </li>
  );
}
