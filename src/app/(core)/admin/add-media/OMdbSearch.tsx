"use client";

import { useState } from "react";
import { fetchOmdbByTitle, OmdbSearchElement } from "./actions";
import Image from "next/image";
import { createMediaByImdbId } from "../actions";
import { useAuth } from "@/context/auth";
import InputField from "@/ui/InputField";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/ui/Table";
import Button from "@/ui/Button";
import { FaPlus } from "react-icons/fa6";
import toast from "react-hot-toast";

function isValidURL(url: string) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

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
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead />
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            {mediaResults.map((media) => {
              return (
                <TableRow key={media.imdbID}>
                  <TableCell className="h-24 w-32">
                    {isValidURL(media.Poster) && (
                      <Image
                        className="h-full w-full object-cover"
                        src={media.Poster}
                        width={560}
                        height={348}
                        alt={media.Title}
                      />
                    )}
                  </TableCell>
                  <TableCell>
                    {media.Title} ({media.Year})
                  </TableCell>
                  <TableCell className="w-32">{media.Type}</TableCell>
                  <TableCell className="w-32">
                    <Button
                      onClick={async () => {
                        const tokenResult =
                          await auth?.currentUser?.getIdTokenResult();
                        const authToken = tokenResult?.token;
                        if (!authToken) return;
                        try {
                          await createMediaByImdbId(media.imdbID, authToken);
                          toast.success(`Successfully added ${media.Title}`);

                          setMediaResults((mediaResults) =>
                            mediaResults.filter(
                              (prevMedia) => prevMedia.imdbID !== media.imdbID,
                            ),
                          );
                        } catch (e: any) {
                          toast.error(`Error adding ${media.Title}`);
                        }
                      }}
                    >
                      <FaPlus />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
