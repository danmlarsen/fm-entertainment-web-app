export default function TrendingMediaCarouselSkeleton() {
  return (
    <div className="relative min-h-[8.75rem] overflow-x-hidden md:min-h-[14.375rem]">
      <ul className="absolute flex h-full items-center gap-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <li
            key={i}
            className="relative h-full w-[15rem] animate-pulse overflow-hidden rounded-lg bg-secondary-500/15 md:w-[29.375rem]"
          />
        ))}
      </ul>
    </div>
  );
}
