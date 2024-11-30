import { MediaData } from "@/lib/data-service";

import Image from "next/image";

import MediaItemDetails from "./MediaItemDetails";
import BookmarkButton from "./BookmarkButton";

import IconPlay from "@/assets/icon-play.svg";

export default function MediaListItem({ data }: { data: MediaData }) {
  const { title, thumbnail, isBookmarked } = data;

  return (
    <li className="space-y-2">
      <div className="group relative h-28 cursor-pointer overflow-hidden rounded-lg md:h-36">
        <Image
          className="object-cover transition duration-300 group-hover:scale-110"
          src={thumbnail.regular.small}
          alt={title}
          fill
          sizes="(max-width: 375px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw"
        />
        <div className="absolute inset-0 grid place-items-center bg-black/50 text-lg font-medium opacity-0 transition duration-300 group-hover:opacity-100">
          <button className="flex h-[48px] w-[117px] items-center gap-[19px] rounded-full bg-white/25 p-[9px]">
            <Image src={IconPlay} alt="Play icon" />
            <span>Play</span>
          </button>
        </div>
        <BookmarkButton isBookmarked={isBookmarked} />
      </div>
      <MediaItemDetails data={data} />
    </li>
  );
}
