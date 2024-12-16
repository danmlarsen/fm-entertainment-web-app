"use client";

import Image from "next/image";

import IconPlay from "@/assets/icon-play.svg";
import toast from "react-hot-toast";
import { MediaType } from "@/types/MediaType";

export default function PlayMediaOverlay({ data }: { data: MediaType }) {
  return (
    <div className="absolute inset-0 grid place-items-center bg-black/50 text-lg font-medium opacity-0 transition duration-300 hover:opacity-100 has-[:focus]:opacity-100">
      <button
        className="flex h-[48px] w-[117px] items-center gap-[19px] rounded-full bg-white/25 p-[9px]"
        onClick={() => {
          toast(
            `Started playing ${data.category.toLowerCase()}: ${data.title}`,
          );
        }}
      >
        <Image src={IconPlay} alt="Play icon" />
        <span>Play</span>
      </button>
    </div>
  );
}
