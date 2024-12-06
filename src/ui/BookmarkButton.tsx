"use client";

import Image from "next/image";

import IconBookMarkEmpty from "@/assets/icon-bookmark-empty.svg";
import IconBookMarkFull from "@/assets/icon-bookmark-full.svg";
import { MediaType } from "@/types/MediaType";
import { createBookmark, deleteBookmark } from "@/lib/actions";
import { useAuth } from "@/context/auth";
import { useOptimistic, useTransition } from "react";

interface AppProps extends React.ComponentPropsWithoutRef<"button"> {
  data: MediaType;
}

export default function BookmarkButton({ data, ...props }: AppProps) {
  const auth = useAuth();

  const { isBookmarked } = data;

  const [, startTransition] = useTransition();
  const [optimisticIsBookmarked, addOptimistic] = useOptimistic(
    isBookmarked,
    (curState) => !curState,
  );

  async function handleBookmarkClick() {
    startTransition(() => addOptimistic(!isBookmarked));

    const token = await auth?.currentUser?.getIdToken();
    if (!token) {
      return;
    }

    if (isBookmarked) {
      await deleteBookmark(data.id, token);
    } else {
      await createBookmark(data.id, token);
    }
  }

  return (
    <button
      className="absolute right-2 top-2 grid size-8 place-items-center rounded-full bg-secondary-900/50"
      onClick={handleBookmarkClick}
      {...props}
    >
      {optimisticIsBookmarked ? (
        <Image src={IconBookMarkFull} alt="Filled bookmark" />
      ) : (
        <Image src={IconBookMarkEmpty} alt="Empty bookmark" />
      )}
    </button>
  );
}
