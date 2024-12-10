import { twMerge } from "tailwind-merge";

export default function Avatar({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={twMerge(
        "relative flex aspect-square size-6 shrink-0 overflow-hidden rounded-full border border-white md:size-8 lg:size-10",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export function AvatarFallback({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={twMerge(
        "flex h-full w-full items-center justify-center rounded-full bg-secondary-500",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
