import site from "@/data/site";

export function createPageMetadata({ title, description }) {
  return {
    title,
    description: description || site.description,
  };
}
