export function getPageHref(page) {
  if (page <= 1) return '/';
  return `/page/${page}`;
}

export function getCategoryHref(slug) {
  return `/categorias/${slug}`;
}
