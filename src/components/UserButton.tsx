"use client";

import Image from "next/image";
import { useAuth } from "@/context/auth";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import UserDropdownMenu from "./UserDropdownMenu";
import Avatar, { AvatarFallback } from "@/ui/Avatar";

export default function UserButton() {
  const auth = useAuth();

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="relative flex size-6 md:size-8 lg:size-10">
      {!!auth?.currentUser && (
        <>
          <button
            onClick={() => setShowDropdown((prev) => !prev)}
            aria-label="User menu button"
            aria-haspopup="menu"
            aria-expanded={showDropdown}
          >
            <Avatar>
              {!!auth?.currentUser?.photoURL && (
                <Image
                  className="h-full w-full"
                  src={auth.currentUser.photoURL}
                  alt={`${auth.currentUser.displayName} avatar`}
                  width={40}
                  height={40}
                />
              )}
              <AvatarFallback>
                {(auth?.currentUser?.displayName ||
                  auth?.currentUser?.email)?.[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </button>
          <AnimatePresence mode="wait">
            {!!showDropdown && (
              <UserDropdownMenu onClose={() => setShowDropdown(false)} />
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}
