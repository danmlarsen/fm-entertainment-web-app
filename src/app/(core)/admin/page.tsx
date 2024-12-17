import SectionTitle from "@/ui/SectionTitle";
import AdminMediaTable from "./AdminMediaTable";
import Link from "next/link";
import Breadcrumbs from "@/ui/Breadcrumbs";
import AdminTrendingMediaTable from "./AdminTrendingMediaTable";

export default function Admin() {
  return (
    <div className="max-w-5xl space-y-6">
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
      <div className="space-y-4">
        <h2 className="text-2xl">Trending</h2>
        <AdminTrendingMediaTable />
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl">Recommended</h2>
        <AdminMediaTable />
      </div>
    </div>
  );
}
