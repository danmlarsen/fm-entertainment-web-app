"use client";

import Image from "next/image";

import IconSearch from "@/assets/icon-search.svg";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function MediaSearch({ ...props }) {
  const [searchString, setSearchString] = useState("");

  const router = useRouter();
  const pathname = usePathname();

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (!!searchString) {
      params.set("search", searchString);
    }
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <form action="" onSubmit={handleSearch}>
      <div className="flex gap-4">
        <button type="submit" aria-label="Search button">
          <Image src={IconSearch} alt="Search icon" />
        </button>
        <label
          className="flex-1 border-b border-b-transparent has-[:focus]:border-secondary-500"
          htmlFor="search"
        >
          <input
            className="w-full bg-transparent focus:outline-none"
            type="text"
            name="search"
            id="search"
            {...props}
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
          />
        </label>
      </div>
    </form>
  );
}
