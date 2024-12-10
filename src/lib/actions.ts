"use server";

import { auth, firestore } from "@/firebase/server";
import { FieldValue } from "firebase-admin/firestore";
import { revalidateTag } from "next/cache";

export async function createBookmark(mediaId: string, authToken: string) {
  const verifiedToken = await auth.verifyIdToken(authToken);

  if (!verifiedToken) {
    return {
      error: true,
      message: "Unauthorized",
    };
  }

  await firestore
    .collection("bookmarks")
    .doc(verifiedToken.uid)
    .set(
      {
        [mediaId]: true,
      },
      {
        merge: true,
      },
    );

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

  await firestore
    .collection("bookmarks")
    .doc(verifiedToken.uid)
    .update({
      [mediaId]: FieldValue.delete(),
    });

  revalidateTag("getMedia");
}
