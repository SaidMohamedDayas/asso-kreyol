export function cn(...values) {
  return values.filter(Boolean).join(" ");
}

export function isExternalHref(href = "") {
  return /^(https?:|mailto:|tel:)/.test(href);
}
