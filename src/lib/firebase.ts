import { MediaType } from "@/types/MediaType";
import { firestore } from "@/firebase/server";

export async function getTrendingMedia() {
  const trendingSnapshot = await firestore
    .collection("media")
    .where("isTrending", "==", true)
    .get();

  const trendingMedia = trendingSnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      }) as MediaType,
  );

  return { data: trendingMedia };
}

export async function getRecommendedMedia() {
  const recommendedMediaSnapshot = await firestore
    .collection("media")
    .where("isTrending", "==", false)
    .get();

  const recommendedMedia = recommendedMediaSnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      }) as MediaType,
  );

  return { data: recommendedMedia };
}

export async function getMovies() {
  const moviesSnapshot = await firestore
    .collection("media")
    .where("category", "==", "Movie")
    .get();

  const movies = moviesSnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      }) as MediaType,
  );

  return { data: movies };
}

export async function getShows() {
  const showsSnapshot = await firestore
    .collection("media")
    .where("category", "==", "TV Series")
    .get();

  const shows = showsSnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      }) as MediaType,
  );

  return { data: shows };
}

export async function getBookmarked(category: "Movie" | "TV Series" = "Movie") {
  const bookmarkedSnapshot = await firestore
    .collection("media")
    .where("isBookmarked", "==", true)
    .where("category", "==", category)
    .get();

  const bookmarked = bookmarkedSnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      }) as MediaType,
  );

  return { data: bookmarked };
}
