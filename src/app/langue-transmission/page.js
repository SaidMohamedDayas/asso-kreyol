import PlaceholderPage from "@/components/shared/PlaceholderPage";
import { getNavigationItem } from "@/data/navigation";

const page = getNavigationItem("/langue-transmission");

export const metadata = {
  title: page.label,
};

export default function LangueTransmissionPage() {
  return <PlaceholderPage title={page.label} />;
}
