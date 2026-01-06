import { baseMeta } from '~/utils/meta';
import { getPosts } from './posts';

// For SPA mode, we export the data directly (no server loader)
export function clientLoader() {
  const allPosts = getPosts();
  const featured = allPosts.filter(post => post.frontmatter.featured)[0];
  const posts = allPosts.filter(post => featured?.slug !== post.slug);

  return { posts, featured };
}

export function meta() {
  return baseMeta({
    title: 'Articles',
    description:
      'A collection of technical design and development articles. May contain incoherent ramblings.',
  });
}

export { Articles as default } from './articles';
