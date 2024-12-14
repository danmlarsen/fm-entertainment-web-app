import { getMedia } from "@/lib/firebase-service";
import Image from "next/image";
import AdminActionButtons from "./AdminActionButtons";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/ui/Table";

export default async function AdminTrendingMediaTable() {
  const trendingMedia = await getMedia({
    filters: { isTrending: true },
  });

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead />
          <TableHead>Title</TableHead>
          <TableHead>Category</TableHead>
          <TableHead />
        </TableRow>
      </TableHeader>
      <TableBody>
        {trendingMedia.map((media) => {
          const { id, title, thumbnail, year, category } = media;
          return (
            <TableRow key={id} className="divide-y divide-secondary-500">
              <TableCell className="h-24 w-20">
                <Image
                  className="h-full w-full object-cover"
                  src={thumbnail}
                  width={560}
                  height={348}
                  alt={title}
                />
              </TableCell>
              <TableCell>
                {title} ({year})
              </TableCell>
              <TableCell>{category}</TableCell>
              <TableCell>
                <AdminActionButtons data={media} />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
