import SectionTitle from "@/ui/SectionTitle";
import OMdbSearch from "./OMdbSearch";
import Breadcrumbs from "@/ui/Breadcrumbs";

export default function AddMedia() {
  return (
    <div className="max-w-5xl space-y-6">
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
      <SectionTitle>Add Media</SectionTitle>
      <div>
        <OMdbSearch />
      </div>
    </div>
  );
}
