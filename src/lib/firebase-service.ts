import { MediaType } from "@/types/MediaType";
import { firestore } from "@/firebase/server";
import { Query } from "firebase-admin/firestore";

type GetMediaOptions = {
  category?: "Movie" | "TV Series";
  filters?: {
    isTrending?: boolean;
    isBookmarked?: boolean;
  };
  limit?: number;
};

export async function getMedia(options?: GetMediaOptions) {
  let query = firestore.collection("media") as Query;

  if (options?.category !== null && options?.category !== undefined) {
    query = query.where("category", "==", options.category);
  }

  if (
    options?.filters?.isTrending !== null &&
    options?.filters?.isTrending !== undefined
  ) {
    query = query.where("isTrending", "==", options?.filters?.isTrending);
  }

  if (
    options?.filters?.isBookmarked !== null &&
    options?.filters?.isBookmarked !== undefined
  ) {
    query = query.where("isBookmarked", "==", options?.filters?.isBookmarked);
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
