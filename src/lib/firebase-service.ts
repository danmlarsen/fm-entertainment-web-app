import { MediaType } from "@/types/MediaType";
import { firestore } from "@/firebase/server";
import { Query } from "firebase-admin/firestore";
import "server-only";
import { unstable_cache } from "next/cache";

type GetMediaOptions = {
  category?: "Movie" | "TV Series";
  filters?: {
    isTrending?: boolean;
    isBookmarked?: boolean;
  };
  limit?: number;
};

export const getCachedMedia = unstable_cache(async (options) =>
  getMedia(options),
);

export async function getMedia(options?: GetMediaOptions) {
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
      }) as MediaType,
  );
}
