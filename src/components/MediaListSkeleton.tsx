export default function MediaListSkeleton({
  numItems = 20,
}: {
  numItems?: number;
}) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-6 sm:grid-cols-[repeat(auto-fill,minmax(180px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] lg:gap-10">
      {Array.from({ length: numItems }).map((_, i) => (
        <li key={i}>
          <div className="h-28 animate-pulse rounded-lg bg-secondary-500 md:h-36 lg:h-44"></div>
        </li>
      ))}
    </ul>
  );
}
