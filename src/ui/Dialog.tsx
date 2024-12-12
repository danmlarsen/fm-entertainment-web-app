"use client";

import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

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
  function handleClose() {
    onOpenChange?.();
  }

  return createPortal(
    <>
      <DialogOverlay onClickedOverlay={handleClose} />
      <dialog
        className={twMerge(
          "fixed left-1/2 top-1/2 z-50 mx-0 -translate-x-1/2 -translate-y-1/2 bg-transparent text-white",
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
      </dialog>
    </>,
    document.body,
  );
}

export function DialogOverlay({
  onClickedOverlay,
}: {
  onClickedOverlay: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/75"
      onClick={onClickedOverlay}
    ></div>
  );
}
