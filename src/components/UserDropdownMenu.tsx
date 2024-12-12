"use client";

import { useAuth } from "@/context/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

export default function UserDropdownMenu({ onClose }: { onClose: () => void }) {
  const auth = useAuth();
  const router = useRouter();

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
      className="absolute right-full top-full z-50 space-y-4 rounded bg-secondary-700 p-4 text-sm shadow-lg shadow-secondary-900 lg:bottom-full lg:left-full lg:right-auto lg:top-auto"
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
            <Link href={`/admin`}>Admin dashboard</Link>
          </UserDropdownMenuItem>
        )}
        <UserDropdownMenuItem>
          <button
            onClick={async () => {
              await auth?.logout();
              onClose?.();
              toast.success("Successfully logged out.");
              router.refresh();
            }}
          >
            Logout
          </button>
        </UserDropdownMenuItem>
      </ul>
    </motion.div>
  );
}

function UserDropdownMenuItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-lg py-1 transition duration-300 hover:bg-secondary-500/5">
      {children}
    </li>
  );
}
