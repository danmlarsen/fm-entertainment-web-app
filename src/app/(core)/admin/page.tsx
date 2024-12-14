import SectionTitle from "@/ui/SectionTitle";
import AdminMediaTable from "./AdminMediaTable";
import Link from "next/link";
import Breadcrumbs from "@/ui/Breadcrumbs";

export default function Admin() {
  return (
    <div className="space-y-6">
      <Breadcrumbs
        items={[
          {
            label: "Dashboard",
          },
        ]}
      />
      <SectionTitle>Admin Dashboard</SectionTitle>
      <Link
        className="inline-flex h-12 items-center justify-center rounded-md bg-primary-500 px-4 text-white transition duration-300 hover:bg-white hover:text-black"
        href="/admin/add-media"
      >
        Add Movie/Show
      </Link>
      <AdminMediaTable />
    </div>
  );
}
