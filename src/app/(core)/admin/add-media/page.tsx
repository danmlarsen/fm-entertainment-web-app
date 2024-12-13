import SectionTitle from "@/ui/SectionTitle";
import OMdbSearch from "./OMdbSearch";

export default function AddMedia() {
  return (
    <div className="space-y-6">
      <div>Dashboard / Add Media</div>
      <SectionTitle>Admin Dashboard</SectionTitle>
      <div>
        <OMdbSearch />
      </div>
    </div>
  );
}
