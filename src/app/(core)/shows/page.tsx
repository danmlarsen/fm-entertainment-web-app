import { getShows } from "@/lib/data-service";

import MediaList from "@/components/MediaList";

export default function Page() {
  const shows = getShows();

  return (
    <div>
      <div className="space-y-6">
        <h2>TV Series</h2>
        <MediaList data={shows} />
      </div>
    </div>
  );
}
