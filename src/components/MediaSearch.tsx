import Image from "next/image";

import IconSearch from "@/assets/icon-search.svg";

export default function MediaSearch({ ...props }) {
  return (
    <div className="flex gap-4">
      <div>
        <Image src={IconSearch} alt="Search icon" />
      </div>
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
        />
      </label>
    </div>
  );
}
