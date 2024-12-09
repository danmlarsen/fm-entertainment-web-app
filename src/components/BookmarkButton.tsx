"use client";

import { MediaType } from "@/types/MediaType";
import { createBookmark, deleteBookmark } from "@/lib/actions";
import { useAuth } from "@/context/auth";
import { useOptimistic, useTransition } from "react";
import IconBookmarkFull from "@/ui/IconBookmarkFull";
import IconBookmarkEmpty from "@/ui/IconBookmarkEmpty";

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
      className={`absolute right-2 top-2 grid size-8 place-items-center rounded-full bg-secondary-900/50 transition duration-300 hover:bg-white hover:text-black`}
      onClick={handleBookmarkClick}
      {...props}
    >
      {optimisticIsBookmarked ? <IconBookmarkFull /> : <IconBookmarkEmpty />}
    </button>
  );
}
