"use client";

import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Dialog({
  children,
  className,
  open,
  onOpenChange,
  ...props
}: {
  children: React.ReactNode;
  open: boolean;
  className?: string;
  onOpenChange?: () => void;
}) {
  async function handleClose() {
    onOpenChange?.();
  }

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return mounted
    ? createPortal(
        <>
          <DialogOverlay onClickedOverlay={handleClose} />
          <motion.dialog
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={twMerge(
              "fixed left-1/2 top-1/2 z-50 mx-0 -translate-x-1/2 -translate-y-1/2 bg-transparent text-white duration-300",
              className,
            )}
            open={open}
            {...props}
          >
            {children}
            <button
              className="absolute right-0 top-0 m-4 opacity-50 transition duration-200 hover:opacity-100"
              onClick={handleClose}
            >
              <IoClose />
            </button>
          </motion.dialog>
        </>,
        document.body,
      )
    : null;
}

export function DialogOverlay({
  onClickedOverlay,
}: {
  onClickedOverlay: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 bg-black/75"
      onClick={onClickedOverlay}
    ></motion.div>
  );
}
