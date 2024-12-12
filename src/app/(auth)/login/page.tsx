"use client";

import LoginForm from "@/components/LoginForm";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <LoginForm
      onSuccess={() => {
        router.refresh();
      }}
    />
  );
}
