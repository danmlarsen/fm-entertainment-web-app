"use client";

import Image from "next/image";
import ImageAvatar from "@/assets/image-avatar.png";
import { useAuth } from "@/context/auth";
import { useRouter } from "next/navigation";

export default function UserButton() {
  const auth = useAuth();
  const router = useRouter();

  return (
    <Image
      className="size-6 md:size-8 lg:size-10"
      src={ImageAvatar}
      alt="User avatar"
      onClick={async () => {
        await auth?.logout();
        router.refresh();
      }}
    />
  );
}
