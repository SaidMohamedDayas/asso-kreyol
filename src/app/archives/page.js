import PlaceholderPage from "@/components/shared/PlaceholderPage";
import { getNavigationItem } from "@/data/navigation";

const page = getNavigationItem("/archives");

export const metadata = {
  title: page.label,
};

export default function ArchivesPage() {
  return <PlaceholderPage title={page.label} />;
}
