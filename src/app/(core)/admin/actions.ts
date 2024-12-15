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

  const mediaType = mediaJson.Type;
  if (mediaType !== "movie" && mediaType !== "series") {
    return {
      error: true,
      message: "Media needs to be either a movie or series",
    };
  }

  const lastAtIndex = mediaJson.Poster.lastIndexOf("@");
  const posterNoParams = mediaJson.Poster.slice(0, lastAtIndex);
  const newPoster = `${posterNoParams}@._V1_SX2000.jpg`;

  const data = {
    title: mediaJson.Title,
    year: mediaJson.Year,
    rating: mediaJson.Rated,
    category: mediaType === "movie" ? "Movie" : "TV Series",
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
