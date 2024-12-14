import { Fragment } from "react";
import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";

export default function Breadcrumbs({
  items,
}: {
  items: {
    label: string;
    href?: string;
  }[];
}) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex items-center gap-2">
        {items.map((item, index) => (
          <Fragment key={index}>
            <li>
              {!!item.href && <Link href={item.href}>{item.label}</Link>}
              {!item.href && <span>{item.label}</span>}
            </li>
            {index + 1 < items.length && (
              <li>
                <IoChevronForward />
              </li>
            )}
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}
