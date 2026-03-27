import PlaceholderPage from "@/components/shared/PlaceholderPage";
import { getNavigationItem } from "@/data/navigation";

const page = getNavigationItem("/contact");

export const metadata = {
  title: page.label,
};

export default function ContactPage() {
  return (
    <PlaceholderPage
      title={page.label}
      description="TODO - Cette page accueillera prochainement les informations de contact, les modalités de prise de lien et les indications utiles."
    />
  );
}
