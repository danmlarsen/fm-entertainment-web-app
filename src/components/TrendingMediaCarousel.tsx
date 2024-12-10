import { getCachedMedia, getUserBookmarks } from "@/lib/firebase-service";
import TrendingMediaCarouselList from "./TrendingMediaCarouselList";
import TrendingMediaCarouselItem from "./TrendingMediaCarouselItem";

export default async function TrendingMediaCarousel() {
  const trendingData = await getCachedMedia({
    filters: { isTrending: true },
  });

  const userBookmarks = await getUserBookmarks();

  return (
    <TrendingMediaCarouselList>
      {trendingData.map((item) => (
        <TrendingMediaCarouselItem
          key={item.title}
          data={{
            ...item,
            isBookmarked: userBookmarks[item.id],
          }}
        />
      ))}
    </TrendingMediaCarouselList>
  );
}
