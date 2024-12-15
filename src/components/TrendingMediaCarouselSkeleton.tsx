export default function TrendingMediaCarouselSkeleton() {
  return (
    <div className="relative min-h-[140px] overflow-x-hidden md:min-h-[230px]">
      <ul className="absolute flex h-full items-center gap-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <li
            key={i}
            className="relative h-full w-[240px] animate-pulse overflow-hidden rounded-lg bg-secondary-500 md:w-[470px]"
          />
        ))}
      </ul>
    </div>
  );
}
