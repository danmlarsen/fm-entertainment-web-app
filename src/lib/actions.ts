"use server";

import { auth, firestore } from "@/firebase/server";
import { revalidateTag } from "next/cache";

export async function createBookmark(id: string, authToken: string) {
  const verifiedToken = await auth.verifyIdToken(authToken);

  if (!verifiedToken) {
    return {
      error: true,
      message: "Unauthorized",
    };
  }

  await firestore.collection("bookmarks").add({
    id,
    userId: verifiedToken.uid,
  });

  revalidateTag("getMedia");
}

export async function deleteBookmark(id: string, authToken: string) {
  const verifiedToken = await auth.verifyIdToken(authToken);

  if (!verifiedToken) {
    return {
      error: true,
      message: "Unauthorized",
    };
  }

  const bookmarkSnapshot = await firestore
    .collection("bookmarks")
    .where("id", "==", id)
    .where("userId", "==", verifiedToken.uid)
    .get();
  if (bookmarkSnapshot.empty) return;

  const bookmarkId = bookmarkSnapshot.docs.at(0)?.id;

  if (bookmarkId)
    await firestore.collection("bookmarks").doc(bookmarkId).delete();

  revalidateTag("getMedia");
}
