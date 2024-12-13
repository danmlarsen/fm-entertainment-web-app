"use server";

import { auth, firestore } from "@/firebase/server";
import { revalidateTag } from "next/cache";

export async function createMediaByImdbId(imdbId: string, authToken: string) {
  const verifiedToken = await auth.verifyIdToken(authToken);

  if (!verifiedToken || !verifiedToken.admin) {
    return {
      error: true,
      message: "Unauthorized",
    };
  }

  const mediaData = await fetch(
    `https://www.omdbapi.com/?i=${imdbId}&apikey=${process.env.OMDB_KEY}`,
  );
  const mediaJson = await mediaData.json();

  const data = {
    title: mediaJson.Title,
    year: mediaJson.Year,
    rating: mediaJson.Rated,
    category: mediaJson.Type === "movie" ? "Movie" : "TV Series",
    thumbnail: mediaJson.Poster,
    isTrending: false,
  };

  const media = await firestore.collection("media").add(data);

  revalidateTag("getMedia");

  return {
    mediaId: media.id,
  };
}

export async function removeMedia(mediaId: string, authToken: string) {
  const verifiedToken = await auth.verifyIdToken(authToken);

  if (!verifiedToken || !verifiedToken.admin) {
    return {
      error: true,
      message: "Unauthorized",
    };
  }

  await firestore.collection("media").doc(mediaId).delete();

  revalidateTag("getMedia");
}

export async function setMediaIsTrending(
  mediaId: string,
  isTrending: boolean,
  authToken: string,
) {
  const verifiedToken = await auth.verifyIdToken(authToken);

  if (!verifiedToken || !verifiedToken.admin) {
    return {
      error: true,
      message: "Unauthorized",
    };
  }

  await firestore.collection("media").doc(mediaId).update({
    isTrending,
  });

  revalidateTag("getMedia");
}
