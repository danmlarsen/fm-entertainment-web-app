import { MediaData } from "@/lib/data-service";

import MediaListItem from "./MediaListItem";

export default function MediaList({ data }: { data: MediaData[] }) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(164px,1fr))] gap-4">
      {data.map((media) => (
        <MediaListItem key={media.title} data={media} />
      ))}
    </ul>
  );
}
