export default function MediaListSkeleton({
  numItems = 20,
}: {
  numItems?: number;
}) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(9.375rem,1fr))] gap-4 sm:grid-cols-[repeat(auto-fill,minmax(11.25rem,1fr))] md:grid-cols-[repeat(auto-fill,minmax(13.75rem,1fr))] md:gap-8 lg:grid-cols-[repeat(auto-fill,minmax(17.5rem,1fr))] lg:gap-10">
      {Array.from({ length: numItems }).map((_, i) => (
        <li key={i}>
          <div className="h-28 animate-pulse rounded-lg bg-secondary-500 md:h-36 lg:h-44"></div>
        </li>
      ))}
    </ul>
  );
}
