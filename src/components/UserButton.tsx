"use client";

import Image from "next/image";
import { useAuth } from "@/context/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import UserDropdownMenu from "./UserDropdownMenu";

export default function UserButton() {
  const auth = useAuth();
  const router = useRouter();

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="relative flex">
      <button onClick={() => setShowDropdown((prev) => !prev)}>
        {!!auth?.currentUser?.photoURL && (
          <Image
            className="aspect-square size-6 rounded-full md:size-8 lg:size-10"
            src={auth.currentUser.photoURL}
            alt={`${auth.currentUser.displayName} avatar`}
            width={24}
            height={24}
          />
        )}
      </button>
      <AnimatePresence mode="wait">
        {!!showDropdown && (
          <UserDropdownMenu onClose={() => setShowDropdown(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
