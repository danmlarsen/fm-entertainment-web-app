"use client";

import { motion } from "motion/react";
import { MediaType } from "@/types/MediaType";
import { useRef } from "react";
import TrendingMediaCarouselItem from "./TrendingMediaCarouselItem";

export default function TrendingMediaCarouselList({
  data,
}: {
  data: MediaType[];
}) {
  const constraintsRef = useRef(null);
  return (
    <div
      className="relative min-h-[140px] overflow-x-hidden md:min-h-[230px]"
      ref={constraintsRef}
    >
      <motion.ul
        drag="x"
        dragConstraints={constraintsRef}
        className="absolute flex h-full items-center gap-4"
      >
        {data.map((item) => (
          <TrendingMediaCarouselItem key={item.title} data={item} />
        ))}
      </motion.ul>
    </div>
  );
}
