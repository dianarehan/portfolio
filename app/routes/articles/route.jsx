import { Outlet, useLoaderData, useLocation } from '@remix-run/react';
import { MDXProvider } from '@mdx-js/react';
import { Post, postMarkdown } from '~/layouts/post';
import { baseMeta } from '~/utils/meta';
import config from '~/config.json';
import { formatTimecode, readingTime } from '~/utils/timecode';

// Import all articles statically for SPA mode
const articleModules = import.meta.glob('../articles.*.mdx', { eager: true });
const articleRawModules = import.meta.glob('../articles.*.mdx', { query: '?raw', import: 'default', eager: true });

export function clientLoader({ request }) {
  const url = new URL(request.url);
  const slug = url.pathname.split('/').at(-1);

  const moduleKey = `../articles.${slug}.mdx`;
  const module = articleModules[moduleKey];
  const text = articleRawModules[moduleKey] || '';

  if (!module) {
    return { frontmatter: {}, timecode: '0:00', ogImage: '' };
  }

  const readTime = readingTime(text);
  const ogImage = `${config.url}/static/${slug}-og.jpg`;

  return {
    ogImage,
    frontmatter: module.frontmatter,
    timecode: formatTimecode(readTime),
  };
}

export function meta({ data }) {
  if (!data?.frontmatter?.title) return baseMeta({ title: 'Article' });
  const { title, abstract } = data.frontmatter;
  return baseMeta({ title, description: abstract, prefix: '', ogImage: data.ogImage });
}

export default function Articles() {
  const { frontmatter, timecode } = useLoaderData();

  return (
    <MDXProvider components={postMarkdown}>
      <Post {...frontmatter} timecode={timecode}>
        <Outlet />
      </Post>
    </MDXProvider>
  );
}
