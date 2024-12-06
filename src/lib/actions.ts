"use server";

import { auth, firestore } from "@/firebase/server";
import { revalidateTag } from "next/cache";

export async function createBookmark(mediaId: string, authToken: string) {
  const verifiedToken = await auth.verifyIdToken(authToken);

  if (!verifiedToken) {
    return {
      error: true,
      message: "Unauthorized",
    };
  }

  await firestore.collection("bookmarks").add({
    mediaId,
    userId: verifiedToken.uid,
  });

  revalidateTag("getMedia");
}

export async function deleteBookmark(mediaId: string, authToken: string) {
  const verifiedToken = await auth.verifyIdToken(authToken);

  if (!verifiedToken) {
    return {
      error: true,
      message: "Unauthorized",
    };
  }

  const bookmarkSnapshot = await firestore
    .collection("bookmarks")
    .where("mediaId", "==", mediaId)
    .where("userId", "==", verifiedToken.uid)
    .get();
  if (bookmarkSnapshot.empty) return;

  const bookmarkId = bookmarkSnapshot.docs.at(0)?.id;

  if (bookmarkId)
    await firestore.collection("bookmarks").doc(bookmarkId).delete();

  revalidateTag("getMedia");
}
