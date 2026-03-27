import PlaceholderPage from "@/components/shared/PlaceholderPage";
import { getNavigationItem } from "@/data/navigation";

const page = getNavigationItem("/arts-folklore");

export const metadata = {
  title: page.label,
};

export default function ArtsFolklorePage() {
  return <PlaceholderPage title={page.label} />;
}
