import { twMerge } from "tailwind-merge";

export default function Table({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <table className={twMerge("w-full text-left", className)}>{children}</table>
  );
}

export function TableHeader({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <thead className={twMerge("", className)}>{children}</thead>;
}
export function TableRow({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <tr
      className={twMerge(
        "border-b border-secondary-500 transition-colors duration-300 hover:bg-secondary-700/50",
        className,
      )}
    >
      {children}
    </tr>
  );
}
export function TableHead({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <th className={twMerge("", className)}>{children}</th>;
}
export function TableBody({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <tbody className={twMerge("[&_tr:last-child]:border-0", className)}>
      {children}
    </tbody>
  );
}
export function TableCell({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <td className={twMerge("p-2 align-middle", className)}>{children}</td>;
}
export function TableFooter({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <tfoot className={twMerge("", className)}>{children}</tfoot>;
}
