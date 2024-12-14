"use server";

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
  title: string,
): Promise<OmdbSearchResult> {
  try {
    const res = await fetch(
      `https://www.omdbapi.com/?s=${title}&apikey=${process.env.OMDB_KEY}`,
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
