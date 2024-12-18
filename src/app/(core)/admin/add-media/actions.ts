"use server";

import { auth } from "@/firebase/server";

export type OmdbSearchResult = {
  Search: OmdbSearchElement[];
  totalResults?: string;
  Response?: string;
};

export type OmdbSearchElement = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export async function fetchOmdbByTitle(
  {
    title,
    type,
  }: {
    title: string;
    type: string;
  },
  authToken: string,
): Promise<OmdbSearchResult> {
  const verifiedToken = await auth.verifyIdToken(authToken);

  if (!verifiedToken || !verifiedToken.admin) {
    throw new Error("Unauthorized");
  }

  try {
    const res = await fetch(
      `https://www.omdbapi.com/?s=${title}&type=${type}&apikey=${process.env.OMDB_KEY}`,
    );
    const json = await res.json();
    return json;
  } catch (e: unknown) {
    console.error(e);
    return {
      Search: [],
    };
  }
}
