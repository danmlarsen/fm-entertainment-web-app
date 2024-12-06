import { Suspense } from "react";
import RecommendedMedia from "./RecommendedMedia";
import SectionTitle from "@/ui/SectionTitle";
import MediaSearch from "@/components/MediaSearch";
import TrendingMediaCarousel from "@/components/TrendingMediaCarousel";

export default function Page() {
  return (
    <div className="space-y-6">
      <MediaSearch placeholder="Search for movies or TV Series" />
      <div className="space-y-6">
        <SectionTitle>Trending</SectionTitle>
        <Suspense fallback={<p>Loading...</p>}>
          <TrendingMediaCarousel />
        </Suspense>
      </div>
      <div className="space-y-6">
        <SectionTitle>Recommended for you</SectionTitle>
        <Suspense fallback={<p>Loading...</p>}>
          <RecommendedMedia />
        </Suspense>
      </div>
    </div>
  );
}
