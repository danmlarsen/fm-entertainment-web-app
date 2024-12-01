import Image from "next/image";
import Link from "next/link";

import IconPlay from "@/assets/icon-play.svg";

export default function PlayMediaOverlay() {
  return (
    <Link
      className="absolute inset-0 grid place-items-center bg-black/50 text-lg font-medium opacity-0 transition duration-300 group-hover:opacity-100"
      href="/"
    >
      <span className="flex h-[48px] w-[117px] items-center gap-[19px] rounded-full bg-white/25 p-[9px]">
        <Image src={IconPlay} alt="Play icon" />
        <span>Play</span>
      </span>
    </Link>
  );
}
