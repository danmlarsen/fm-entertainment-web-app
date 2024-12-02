import MediaList from "@/components/MediaList";
import { getShows } from "@/lib/firebase";

export default async function Page() {
  const { data: shows } = await getShows();

  return (
    <div>
      <div className="space-y-6">
        <h2>TV Series</h2>
        <MediaList data={shows} />
      </div>
    </div>
  );
}
