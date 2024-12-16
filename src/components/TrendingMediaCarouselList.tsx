"use client";

import { motion } from "motion/react";
import { useRef } from "react";

export default function TrendingMediaCarouselList({
  children,
}: {
  children?: React.ReactNode;
}) {
  const constraintsRef = useRef(null);
  return (
    <div
      className="relative min-h-[8.75rem] cursor-move overflow-x-hidden md:min-h-[14.375rem]"
      ref={constraintsRef}
    >
      <motion.ul
        drag="x"
        dragConstraints={constraintsRef}
        className="absolute flex h-full items-center gap-4 md:gap-10"
      >
        {children}
      </motion.ul>
    </div>
  );
}
