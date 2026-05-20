export function getPageHref(page) {
  if (page <= 1) return '/';
  return `/page/${page}`;
}

export function getCategoryHref(slug) {
  return `/categorias/${slug}`;
}

export function formatBlogDate(pubDate) {
  if (!pubDate) return '';

  const isoDate = pubDate instanceof Date ? pubDate.toISOString().slice(0, 10) : String(pubDate).slice(0, 10);
  const [year, month, day] = isoDate.split('-').map((part) => Number(part));

  if (!year || !month || !day) return '';

  const date = new Date(Date.UTC(year, month - 1, day));

  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
