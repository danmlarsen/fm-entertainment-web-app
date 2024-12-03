import Image from "next/image";

import IconCategoryMovie from "@/assets/icon-category-movie.svg";
import IconCategoryTV from "@/assets/icon-category-tv.svg";
import { MediaType } from "@/types/MediaType";

export default function MediaItemDetails({ data }: { data: MediaType }) {
  const { title, year, category, rating } = data;

  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2 text-xs text-white/75 md:text-sm">
        <span>{year}</span>
        <div className="size-[2px] rounded-full bg-white/50" />
        <span className="flex items-center gap-1">
          {category === "Movie" && (
            <Image src={IconCategoryMovie} alt="Movie icon" />
          )}
          {category === "TV Series" && (
            <Image src={IconCategoryTV} alt="TV Series icon" />
          )}
          {category}
        </span>
        <div className="size-[2px] rounded-full bg-white/50" />
        <span>{rating}</span>
      </div>
      <h3 className="text-sm font-medium md:text-lg">{title}</h3>
    </div>
  );
}
