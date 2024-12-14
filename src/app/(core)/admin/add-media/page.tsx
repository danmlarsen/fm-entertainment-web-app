import SectionTitle from "@/ui/SectionTitle";
import OMdbSearch from "./OMdbSearch";
import Breadcrumbs from "@/ui/Breadcrumbs";

export default function AddMedia() {
  return (
    <div className="space-y-6">
      <Breadcrumbs
        items={[
          {
            href: "/admin",
            label: "Dashboard",
          },
          {
            label: "Add Media",
          },
        ]}
      />
      <SectionTitle>Admin Dashboard</SectionTitle>
      <div>
        <OMdbSearch />
      </div>
    </div>
  );
}
