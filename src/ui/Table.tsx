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
  return <tr className={twMerge("", className)}>{children}</tr>;
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
  return <tbody className={twMerge("", className)}>{children}</tbody>;
}
export function TableCell({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <td className={twMerge("", className)}>{children}</td>;
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
