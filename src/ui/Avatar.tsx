import { Children, isValidElement } from "react";
import { twMerge } from "tailwind-merge";

export default function Avatar({
  children,
  className,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const validChildren = Children.toArray(children).filter(
    (child) => isValidElement(child) && child.type !== AvatarFallback,
  );
  const fallbackChild = Children.toArray(children).find(
    (child) => isValidElement(child) && child.type === AvatarFallback,
  );

  return (
    <span
      className={twMerge(
        "relative flex aspect-square size-6 shrink-0 overflow-hidden rounded-full border border-white text-sm md:size-8 md:text-base lg:size-10",
        className,
      )}
      {...props}
      aria-hidden
    >
      {validChildren.length === 0 && !!fallbackChild && fallbackChild}
      {validChildren.length > 0 && validChildren}
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
      aria-hidden
    >
      {children}
    </span>
  );
}
