import PlaceholderPage from "@/components/shared/PlaceholderPage";
import { getNavigationItem } from "@/data/navigation";

const page = getNavigationItem("/partenaires");

export const metadata = {
  title: page.label,
};

export default function PartenairesPage() {
  return <PlaceholderPage title={page.label} />;
}
