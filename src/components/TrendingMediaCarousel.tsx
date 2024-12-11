import { getCachedMedia, getCachedUserBookmarks } from "@/lib/firebase-service";
import TrendingMediaCarouselList from "./TrendingMediaCarouselList";
import TrendingMediaCarouselItem from "./TrendingMediaCarouselItem";
import { cookies } from "next/headers";

export default async function TrendingMediaCarousel() {
  const trendingData = await getCachedMedia({
    filters: { isTrending: true },
  });

  const cookieStore = await cookies();
  const token = cookieStore.get("firebaseAuthToken")?.value;
  const userBookmarks = await getCachedUserBookmarks(token);

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
