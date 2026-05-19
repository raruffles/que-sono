import { getCollection } from 'astro:content';

export const POSTS_PER_PAGE = 4;

const sortByDateDesc = (left, right) => {
  const a = left.pubDate ? new Date(left.pubDate).getTime() : 0;
  const b = right.pubDate ? new Date(right.pubDate).getTime() : 0;
  return b - a;
};

export async function getBlogPosts() {
  const entries = await getCollection('posts');

  const published = entries.filter((e) => {
    const status = (e.data && e.data.status) || e.data?.published;
    if (typeof status === 'string') return status === 'published';
    return status !== false;
  });

  const mapped = published.map((e) => ({
    slug: e.id,
    title: e.data?.title ?? '',
    description: e.data?.description ?? '',
    coverImage: e.data?.coverImage ?? e.data?.image ?? null,
    pubDate: e.data?.pubDate ?? null,
    categories: e.data?.categories ?? [],
    content: undefined,
  }));

  return mapped.sort(sortByDateDesc);
}

export function paginatePosts(posts, page, perPage = POSTS_PER_PAGE) {
  const safePage = Number.isFinite(page) ? page : 1;
  const totalPages = Math.max(1, Math.ceil(posts.length / perPage));
  const currentPage = Math.min(Math.max(safePage, 1), totalPages);
  const start = (currentPage - 1) * perPage;

  return {
    items: posts.slice(start, start + perPage),
    currentPage,
    totalPages,
  };
}

export function getPageHref(page) {
  if (page <= 1) return '/';
  return `/page/${page}`;
}

export function getCategoryHref(slug) {
  return `/categorias/${slug}`;
}
