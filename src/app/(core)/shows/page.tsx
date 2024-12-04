import MediaSearch from "@/components/MediaSearch";
import SectionTitle from "@/ui/SectionTitle";
import { Suspense } from "react";
import ShowList from "./ShowList";

export default async function Page() {
  return (
    <div className="space-y-6">
      <MediaSearch placeholder="Search for TV Series" />
      <div className="space-y-6">
        <SectionTitle>TV Series</SectionTitle>
        <Suspense fallback={<p>Loading...</p>}>
          <ShowList />
        </Suspense>
      </div>
    </div>
  );
}
