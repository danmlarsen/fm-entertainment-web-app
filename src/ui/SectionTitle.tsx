export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h2 className="text-xl md:text-3xl">{children}</h2>;
}
