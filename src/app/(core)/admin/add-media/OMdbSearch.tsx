"use client";

import { useState } from "react";
import { fetchMediaByTitle, OmdbSearchElement } from "./actions";
import Image from "next/image";
import { createMediaByImdbId } from "../actions";
import { useAuth } from "@/context/auth";

export default function OMdbSearch() {
  const auth = useAuth();

  const [searchString, setSearchString] = useState("");
  const [mediaResults, setMediaResults] = useState<OmdbSearchElement[]>([]);

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (searchString.length <= 3) return;

          const { Search: result } = await fetchMediaByTitle(searchString);

          setMediaResults([...result]);
        }}
      >
        <div>
          Search:
          <input
            className="text-black"
            type="text"
            name=""
            id=""
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
          />
        </div>
      </form>
      {mediaResults.length > 0 && (
        <ul className="space-y-4">
          {mediaResults.map((media) => (
            <li key={media.imdbID} className="flex gap-2">
              <div
                className="relative h-40 w-32"
                onClick={async () => {
                  const tokenResult =
                    await auth?.currentUser?.getIdTokenResult();
                  const authToken = tokenResult?.token;
                  if (!authToken) return;
                  createMediaByImdbId(media.imdbID, authToken);
                }}
              >
                <Image
                  className="object-cover"
                  src={media.Poster}
                  alt={media.Title}
                  fill
                />
              </div>
              <div className="flex items-center justify-center">
                {media.Title} ({media.Year})
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
