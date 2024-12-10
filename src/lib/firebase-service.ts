import "server-only";

import { MediaType } from "@/types/MediaType";
import { auth, firestore } from "@/firebase/server";
import { Query } from "firebase-admin/firestore";
import { unstable_cache } from "next/cache";
import { cookies } from "next/headers";

const REVALIDATE_SECONDS = 10;

type GetMediaOptions = {
  category?: "Movie" | "TV Series";
  filters?: {
    isTrending?: boolean;
  };
  limit?: number;
};

export const getCachedMedia = unstable_cache(
  async (options) => getMedia(options),
  ["getMedia"],
  { revalidate: REVALIDATE_SECONDS, tags: ["getMedia"] },
);

export async function getMedia(options?: GetMediaOptions) {
  let query = firestore.collection("media") as Query;

  const { category } = options || {};
  const { isTrending } = options?.filters || {};

  if (category !== null && category !== undefined) {
    query = query.where("category", "==", category);
  }

  if (isTrending !== null && isTrending !== undefined) {
    query = query.where("isTrending", "==", isTrending);
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

export async function getUserBookmarks() {
  const cookieStore = await cookies();
  const token = cookieStore.get("firebaseAuthToken")?.value;

  if (!token) {
    return {};
  }

  const verifiedToken = await auth.verifyIdToken(token);

  if (!verifiedToken) {
    return {};
  }

  const bookmarksSnapshot = await firestore
    .collection("bookmarks")
    .doc(verifiedToken.uid)
    .get();
  const bookmarksData = bookmarksSnapshot.data();
  return bookmarksData || {};
}
