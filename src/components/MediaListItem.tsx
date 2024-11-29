import { MediaData } from "@/lib/data-service";

import Image from "next/image";

import IconCategoryMovie from "@/assets/icon-category-movie.svg";
import IconCategoryTV from "@/assets/icon-category-tv.svg";
import IconBookMarkEmpty from "@/assets/icon-bookmark-empty.svg";
import IconBookMarkFull from "@/assets/icon-bookmark-full.svg";

export default function MediaListItem({ data }: { data: MediaData }) {
  const { title, thumbnail, year, category, rating, isBookmarked } = data;

  return (
    <li className="space-y-2">
      <div className="relative h-28 overflow-hidden rounded-lg">
        <Image
          className="object-cover"
          src={thumbnail.regular.small}
          alt={title}
          fill
        />
        <button className="absolute right-2 top-2 grid size-8 place-items-center rounded-full bg-secondary-900/50">
          {isBookmarked ? (
            <Image src={IconBookMarkFull} alt="Filled bookmark" />
          ) : (
            <Image src={IconBookMarkEmpty} alt="Empty bookmark" />
          )}
        </button>
      </div>
      <div className="space-y-1">
        <div className="flex gap-3 text-xs text-white/75">
          <span>{year}</span>
          <span className="flex items-center gap-1">
            {category === "Movie" && (
              <Image src={IconCategoryMovie} alt="Movie icon" />
            )}
            {category === "TV Series" && (
              <Image src={IconCategoryTV} alt="TV Series icon" />
            )}
            {category}
          </span>
          <span>{rating}</span>
        </div>
        <h3 className="text-sm font-medium">{title}</h3>
      </div>
    </li>
  );
}
