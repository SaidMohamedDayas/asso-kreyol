import PlaceholderPage from "@/components/shared/PlaceholderPage";
import { getNavigationItem } from "@/data/navigation";

const page = getNavigationItem("/memoires-histoire");

export const metadata = {
  title: page.label,
};

export default function MemoiresHistoirePage() {
  return <PlaceholderPage title={page.label} />;
}
