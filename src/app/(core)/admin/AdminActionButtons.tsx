"use client";

import { useAuth } from "@/context/auth";
import { MediaType } from "@/types/MediaType";
import Button from "@/ui/Button";
import { FaAngleDown, FaAngleUp, FaTrash } from "react-icons/fa6";
import { removeMedia, setMediaIsTrending } from "./actions";
import { useRouter } from "next/navigation";

export default function AdminActionButtons({ data }: { data: MediaType }) {
  const auth = useAuth();
  const router = useRouter();

  const { id, isTrending } = data;
  return (
    <>
      {!isTrending && (
        <Button
          onClick={async () => {
            const tokenResult = await auth?.currentUser?.getIdTokenResult();
            const authToken = tokenResult?.token;
            if (!authToken) return;
            setMediaIsTrending(id, true, authToken);
            router.refresh();
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
            setMediaIsTrending(id, false, authToken);
            router.refresh();
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
          removeMedia(id, authToken);
          router.refresh();
        }}
      >
        <FaTrash />
      </Button>
    </>
  );
}
