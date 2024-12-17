"use client";

import SignupForm from "@/app/(auth)/signup/SignupForm";
import Dialog from "@/ui/Dialog";
import { useRouter } from "next/navigation";

export default function SignupModal() {
  const router = useRouter();

  return (
    <Dialog
      className="w-full max-w-[25rem]"
      open
      onOpenChange={() => {
        router.back();
      }}
    >
      <SignupForm />
    </Dialog>
  );
}
