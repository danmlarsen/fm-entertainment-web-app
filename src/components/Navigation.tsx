"use client";

import Link from "next/link";

import IconNavHome from "@/ui/IconNavHome";
import IconNavMovies from "@/ui/IconNavMovies";
import IconNavTvSeries from "@/ui/IconNavTvSeries";
import IconNavBookmark from "@/ui/IconNavBookmark";

import { usePathname } from "next/navigation";
import { useAuth } from "@/context/auth";

const links = [
  {
    title: "Home",
    href: "/dashboard",
    icon: <IconNavHome />,
  },
  {
    title: "Movies",
    href: "/movies",
    icon: <IconNavMovies />,
  },
  {
    title: "Shows",
    href: "/shows",
    icon: <IconNavTvSeries />,
  },
  {
    title: "Bookmarks",
    href: "/bookmarked",
    icon: <IconNavBookmark />,
  },
];

export default function Navigation() {
  const pathname = usePathname();
  const auth = useAuth();

  return (
    <nav className="flex gap-6 lg:flex-col">
      {links.map((link) => (
        <Link
          className={`transition duration-300 hover:text-primary-500 ${pathname === link.href ? "text-white" : "text-secondary-500"}`}
          key={link.title}
          href={link.href}
        >
          {link.icon}
        </Link>
      ))}
    </nav>
  );
}
