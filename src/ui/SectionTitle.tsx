import { twMerge } from "tailwind-merge";

export default function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={twMerge("text-xl md:text-3xl", className)}>{children}</h2>
  );
}
