"use client";

import Button from "@/ui/Button";
import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <div className="space-y-6 md:space-y-10">
      <h2 className="text-3xl font-bold">Something went wrong!</h2>
      <div className="flex gap-4">
        <Button onClick={() => reset()}>Try again</Button>
        <Button
          className="border border-white bg-transparent"
          onClick={() => router.back()}
        >
          Go back
        </Button>
      </div>
    </div>
  );
}
