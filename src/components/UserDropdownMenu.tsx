"use client";

import { useAuth } from "@/context/auth";
import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";

export default function UserDropdownMenu({ onClose }: { onClose: () => void }) {
  const auth = useAuth();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as HTMLDivElement)) {
        onClose();
      }
    }

    document.addEventListener("click", handleClick, false);

    return () => document.removeEventListener("click", handleClick, false);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute right-full top-full z-50 min-w-32 space-y-4 overflow-hidden rounded bg-secondary-700 p-4 text-sm shadow-lg shadow-secondary-900 lg:bottom-full lg:left-full lg:right-auto lg:top-auto"
      key="Dropdown"
      ref={ref}
    >
      <div>
        <p className="font-medium">{auth?.currentUser?.displayName}</p>
        <p>{auth?.currentUser?.email}</p>
      </div>
      <ul>
        {!!auth?.customClaims?.admin && (
          <UserDropdownMenuItem>
            <Link
              className="inline-block w-full p-2 text-left focus:outline-none"
              href={`/admin`}
              onClick={onClose}
            >
              Admin dashboard
            </Link>
          </UserDropdownMenuItem>
        )}
        <UserDropdownMenuItem>
          <Link
            className="inline-block w-full p-2 text-left focus:outline-none"
            href={`/logout`}
            onClick={onClose}
          >
            Logout
          </Link>
          {/* <button
            className="w-full p-2 text-left"
            onClick={async () => {
              await auth?.logout();
              onClose?.();
              toast.success("Successfully logged out.");
              router.refresh();
            }}
          >
            Logout
          </button> */}
        </UserDropdownMenuItem>
      </ul>
    </motion.div>
  );
}

function UserDropdownMenuItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-lg py-1 transition duration-300 hover:bg-secondary-500/5 has-[:focus-visible]:ring has-[:focus-visible]:ring-primary-500">
      {children}
    </li>
  );
}
