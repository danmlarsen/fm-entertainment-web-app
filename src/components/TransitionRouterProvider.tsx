"use client";

import { TransitionRouter } from "next-transition-router";
import { animate } from "motion";
import { useRef } from "react";

export default function TransitionRouterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null!);

  return (
    <TransitionRouter
      auto
      leave={(next) => {
        animate(
          wrapperRef.current,
          { opacity: [1, 0] },
          { duration: 0.2, onComplete: next },
        );
      }}
      enter={(next) => {
        animate(
          wrapperRef.current,
          { opacity: [0, 1] },
          { duration: 0.2, onComplete: next },
        );
      }}
    >
      <div ref={wrapperRef}>{children}</div>
    </TransitionRouter>
  );
}
