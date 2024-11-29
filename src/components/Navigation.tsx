"use client";

import Link from "next/link";

import IconNavHome from "@/assets/icon-nav-home.svg";
import IconNavMovies from "@/assets/icon-nav-movies.svg";
import IconNavShows from "@/assets/icon-nav-tv-series.svg";
import IconNavBookmark from "@/assets/icon-nav-bookmark.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  {
    title: "Home",
    href: "/dashboard",
    icon: IconNavHome,
  },
  {
    title: "Movies",
    href: "/movies",
    icon: IconNavMovies,
  },
  {
    title: "Shows",
    href: "/shows",
    icon: IconNavShows,
  },
  {
    title: "Bookmarks",
    href: "/bookmarked",
    icon: IconNavBookmark,
  },
];

export default function Navigation() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="flex gap-6">
      {links.map((link) => (
        <Link key={link.title} href={link.href}>
          <Image src={link.icon} alt={link.title} />
        </Link>
      ))}
    </nav>
  );
}
