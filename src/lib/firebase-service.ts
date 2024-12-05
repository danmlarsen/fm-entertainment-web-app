import { MediaType } from "@/types/MediaType";
import { auth, firestore } from "@/firebase/server";
import { Query } from "firebase-admin/firestore";
import "server-only";
import { unstable_cache } from "next/cache";

const REVALIDATE_SECONDS = 5;

type GetMediaOptions = {
  category?: "Movie" | "TV Series";
  filters?: {
    isTrending?: boolean;
    isBookmarked?: boolean;
  };
  limit?: number;
  token?: string | null;
};

export const getCachedMedia = unstable_cache(
  async (options) => getMedia(options),
  ["getMedia"],
  { revalidate: REVALIDATE_SECONDS, tags: ["getMedia"] },
);

export async function getMedia(options?: GetMediaOptions) {
  let userBookmarks: string[] = [];
  if (options?.token) {
    const token = options.token;
    const verifiedToken = await auth.verifyIdToken(token);

    if (verifiedToken) {
      const bookmarksSnapshot = await firestore
        .collection("bookmarks")
        .where("userId", "==", verifiedToken.uid)
        .get();
      userBookmarks = bookmarksSnapshot.docs.map((doc) => doc.data().id);
    }
  }

  let query = firestore.collection("media") as Query;

  const { category } = options || {};
  const { isTrending, isBookmarked } = options?.filters || {};

  if (category !== null && category !== undefined) {
    query = query.where("category", "==", category);
  }

  if (isTrending !== null && isTrending !== undefined) {
    query = query.where("isTrending", "==", isTrending);
  }

  if (isBookmarked !== null && isBookmarked !== undefined) {
    query = query.where("isBookmarked", "==", isBookmarked);
  }

  const DEFAULT_MEDIA_ITEM_LIMIT = 100;
  const limit = options?.limit || DEFAULT_MEDIA_ITEM_LIMIT;

  const mediaSnapshot = await query.limit(limit).get();

  return mediaSnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
        isBookmarked: userBookmarks.includes(doc.id),
      }) as MediaType,
  );
}
