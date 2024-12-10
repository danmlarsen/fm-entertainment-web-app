"use client";

import { createBookmark, deleteBookmark } from "@/lib/actions";
import { useAuth } from "@/context/auth";
import { useOptimistic, useTransition } from "react";
import IconBookmarkFull from "@/ui/IconBookmarkFull";
import IconBookmarkEmpty from "@/ui/IconBookmarkEmpty";

interface AppProps extends React.ComponentPropsWithoutRef<"button"> {
  mediaId: string;
  isBookmarked: boolean;
}

export default function BookmarkButton({
  mediaId,
  isBookmarked,
  ...props
}: AppProps) {
  const auth = useAuth();

  const [, startTransition] = useTransition();
  const [optimisticIsBookmarked, addOptimistic] = useOptimistic(
    isBookmarked,
    (curState) => !curState,
  );

  async function handleBookmarkClick() {
    startTransition(() => addOptimistic(!isBookmarked));

    const tokenResult = await auth?.currentUser?.getIdTokenResult();
    if (!tokenResult) {
      return;
    }

    if (isBookmarked) {
      await deleteBookmark(mediaId, tokenResult.token);
    } else {
      await createBookmark(mediaId, tokenResult.token);
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
