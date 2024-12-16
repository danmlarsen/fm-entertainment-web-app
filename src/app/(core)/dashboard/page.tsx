import { Suspense } from "react";
import RecommendedMedia from "./RecommendedMedia";
import SectionTitle from "@/ui/SectionTitle";
import MediaSearch from "@/components/MediaSearch";
import TrendingMediaCarousel from "@/components/TrendingMediaCarousel";
import MediaSearchResult from "@/components/MediaSearchResult";
import MediaListSkeleton from "@/components/MediaListSkeleton";
import TrendingMediaCarouselSkeleton from "@/components/TrendingMediaCarouselSkeleton";

export const dynamic = "force-static";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<any>;
}) {
  const { search: searchString } = await searchParams;

  return (
    <div className="space-y-6 md:space-y-10">
      <MediaSearch placeholder="Search for movies or TV Series" />
      {!searchString && (
        <>
          <div className="space-y-6">
            <SectionTitle>Trending</SectionTitle>
            <Suspense fallback={<TrendingMediaCarouselSkeleton />}>
              <TrendingMediaCarousel />
            </Suspense>
          </div>
          <div className="space-y-6">
            <SectionTitle>Recommended for you</SectionTitle>
            <Suspense fallback={<MediaListSkeleton />}>
              <RecommendedMedia />
            </Suspense>
          </div>
        </>
      )}
      {!!searchString && <MediaSearchResult searchString={searchString} />}
    </div>
  );
}
