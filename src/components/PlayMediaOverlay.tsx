"use client";

import Image from "next/image";

import IconPlay from "@/assets/icon-play.svg";
import toast from "react-hot-toast";
import { MediaType } from "@/types/MediaType";

export default function PlayMediaOverlay({ data }: { data: MediaType }) {
  return (
    <div className="absolute inset-0 grid place-items-center bg-black/50 text-lg font-medium opacity-0 transition duration-300 hover:opacity-100 has-[:focus-visible]:opacity-100">
      <button
        className="flex h-12 w-28 items-center gap-4 rounded-full bg-white/25 p-2"
        onClick={() => {
          toast(
            `Started playing ${data.category.toLowerCase()}: ${data.title}`,
          );
        }}
      >
        <Image src={IconPlay} alt="Play icon" aria-hidden />
        <span>Play</span>
      </button>
    </div>
  );
}
