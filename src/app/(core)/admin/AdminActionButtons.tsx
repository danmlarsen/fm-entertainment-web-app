"use client";

import { useAuth } from "@/context/auth";
import { MediaType } from "@/types/MediaType";
import Button from "@/ui/Button";
import { FaAngleDown, FaAngleUp, FaTrash } from "react-icons/fa6";
import { removeMedia, setMediaIsTrending } from "./actions";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AdminActionButtons({ data }: { data: MediaType }) {
  const auth = useAuth();
  const router = useRouter();

  const { id, isTrending, title } = data;
  return (
    <div className="flex items-center justify-center gap-2">
      {!isTrending && (
        <Button
          onClick={async () => {
            const tokenResult = await auth?.currentUser?.getIdTokenResult();
            const authToken = tokenResult?.token;
            if (!authToken) return;
            try {
              await setMediaIsTrending(id, true, authToken);
              toast.success(`Moved ${title} to trending`);
              router.refresh();
            } catch (e: any) {
              toast.error(`Error moving ${title} to trending`);
            }
          }}
        >
          <FaAngleUp />
        </Button>
      )}
      {!!isTrending && (
        <Button
          onClick={async () => {
            const tokenResult = await auth?.currentUser?.getIdTokenResult();
            const authToken = tokenResult?.token;
            if (!authToken) return;

            try {
              await setMediaIsTrending(id, false, authToken);
              toast.success(`Moved ${title} to recommended`);
              router.refresh();
            } catch (e: any) {
              toast.error(`Error moving ${title} to recommended`);
            }
          }}
        >
          <FaAngleDown />
        </Button>
      )}

      <Button
        onClick={async () => {
          const tokenResult = await auth?.currentUser?.getIdTokenResult();
          const authToken = tokenResult?.token;
          if (!authToken) return;

          try {
            await removeMedia(id, authToken);
            toast.success(`Successfully deleted ${title}`);
            router.refresh();
          } catch (e: any) {
            toast.error(`Error deleting ${title}`);
          }
        }}
      >
        <FaTrash />
      </Button>
    </div>
  );
}
