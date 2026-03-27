import PlaceholderPage from "@/components/shared/PlaceholderPage";
import { getNavigationItem } from "@/data/navigation";

const page = getNavigationItem("/association");

export const metadata = {
  title: page.label,
};

export default function AssociationPage() {
  return <PlaceholderPage title={page.label} />;
}
