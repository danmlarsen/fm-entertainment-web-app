import MediaList from "@/components/MediaList";
import MediaSearch from "@/components/MediaSearch";
import { getMedia } from "@/lib/firebase-service";
import SectionTitle from "@/ui/SectionTitle";

export default async function Page() {
  const shows = await getMedia({ category: "TV Series" });

  return (
    <div className="space-y-6">
      <MediaSearch placeholder="Search for TV Series" />
      <div className="space-y-6">
        <SectionTitle>TV Series</SectionTitle>
        <MediaList data={shows} />
      </div>
    </div>
  );
}
