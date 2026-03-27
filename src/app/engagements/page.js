import PlaceholderPage from "@/components/shared/PlaceholderPage";
import { getNavigationItem } from "@/data/navigation";

const page = getNavigationItem("/engagements");

export const metadata = {
  title: page.label,
};

export default function EngagementsPage() {
  return <PlaceholderPage title={page.label} />;
}
