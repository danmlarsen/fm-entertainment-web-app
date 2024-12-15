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

export default async function AdminMediaTable() {
  const allMedia = await getMedia({
    filters: { isTrending: false },
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
        {allMedia.map((media) => {
          const { id, title, thumbnail, year, category } = media;
          return (
            <TableRow key={id}>
              <TableCell className="h-24 w-32">
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
              <TableCell className="w-32">{category}</TableCell>
              <TableCell className="w-32">
                <AdminActionButtons data={media} />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
