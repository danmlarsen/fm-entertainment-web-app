"use client";

import { useState } from "react";
import { fetchOmdbByTitle, OmdbSearchElement } from "./actions";
import Image from "next/image";
import { createMediaByImdbId } from "../actions";
import { useAuth } from "@/context/auth";
import InputField from "@/ui/InputField";

export default function OMdbSearch() {
  const auth = useAuth();

  const [searchString, setSearchString] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mediaResults, setMediaResults] = useState<OmdbSearchElement[]>([]);

  return (
    <div className="space-y-4">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (searchString.length <= 3) return;

          setIsLoading(true);

          const omdbData = await fetchOmdbByTitle(searchString);

          await new Promise((resolve) => setTimeout(resolve, 3000));

          const searchResults =
            omdbData.Response === "True" ? omdbData.Search : [];
          setMediaResults([...searchResults]);
          setIsLoading(false);
        }}
      >
        <div>
          <InputField
            type="text"
            name="searchString"
            id="searchString"
            placeholder="Search for title"
            error=""
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
          />
        </div>
      </form>
      {isLoading && (
        <div className="flex flex-col gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex animate-pulse gap-4">
              <div className="h-40 w-32 bg-gray-500"></div>
              <div className="flex h-40 grow flex-col justify-center gap-4">
                <div className="h-10 w-full bg-gray-500"></div>
                <div className="h-5 w-10/12 bg-gray-500"></div>
                <div className="h-5 w-1/2 bg-gray-500"></div>
              </div>
            </div>
          ))}
        </div>
      )}
      {!isLoading && mediaResults.length === 0 && (
        <h3 className="text-2xl opacity-50">Found no results</h3>
      )}
      {!isLoading && mediaResults.length > 0 && (
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
