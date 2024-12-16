"use client";

import LoginForm from "@/components/LoginForm";
import { useRouter } from "next/navigation";
import { loginSuccess } from "./actions";
import Dialog from "@/ui/Dialog";

export default function LoginModal() {
  const router = useRouter();

  return (
    <Dialog
      className="w-full max-w-[25rem]"
      open
      onOpenChange={() => {
        router.back();
      }}
    >
      <LoginForm
        onSuccess={async () => {
          await loginSuccess();
          router.back();
        }}
      />
    </Dialog>
  );
}
