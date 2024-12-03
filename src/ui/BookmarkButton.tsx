import Image from "next/image";

import IconBookMarkEmpty from "@/assets/icon-bookmark-empty.svg";
import IconBookMarkFull from "@/assets/icon-bookmark-full.svg";

export default function BookmarkButton({
  isBookmarked,
}: {
  isBookmarked: boolean;
}) {
  return (
    <button className="absolute right-2 top-2 grid size-8 place-items-center rounded-full bg-secondary-900/50">
      {isBookmarked ? (
        <Image src={IconBookMarkFull} alt="Filled bookmark" />
      ) : (
        <Image src={IconBookMarkEmpty} alt="Empty bookmark" />
      )}
    </button>
  );
}
