import { getMedia } from "@/lib/firebase-service";
import Image from "next/image";
import AdminActionButtons from "./AdminActionButtons";

export default async function AdminMediaTable() {
  const allMedia = await getMedia({
    orderBy: { field: "isTrending", direction: "desc" },
  });

  return (
    <table className="w-full text-left">
      <thead>
        <tr>
          <th />
          <th>Title</th>
          <th>Category</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {allMedia.map((media) => {
          const { id, title, thumbnail, year, category } = media;
          return (
            <tr key={id} className="divide-y divide-secondary-500">
              <td className="h-24 w-20">
                <Image
                  className="h-full w-full object-cover"
                  src={thumbnail}
                  width={560}
                  height={348}
                  alt={title}
                />
              </td>
              <td>
                {title} ({year})
              </td>
              <td>{category}</td>
              <td>
                <AdminActionButtons data={media} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
