"use client";

import { useAuth } from "@/context/auth";
import Button from "@/ui/Button";

export default function ContinueWithGoogleButton({
  onSuccess,
}: {
  onSuccess: () => void;
}) {
  const auth = useAuth();

  return (
    <Button
      type="button"
      onClick={async () => {
        try {
          await auth?.loginWithGoogle();
          onSuccess();
        } catch (e) {}
      }}
      className="border border-white bg-transparent"
    >
      Continue with Google
    </Button>
  );
}
