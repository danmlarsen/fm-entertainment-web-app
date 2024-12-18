import { JSX } from "react";
import { twMerge } from "tailwind-merge";

export default function SectionTitle({
  children,
  className,
  as: Tag = "h1",
}: {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}) {
  return (
    <Tag className={twMerge("text-xl md:text-3xl", className)}>{children}</Tag>
  );
}
