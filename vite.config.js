import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import jsconfigPaths from 'vite-jsconfig-paths';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import rehypeImgSize from 'rehype-img-size';
import rehypeSlug from 'rehype-slug';
import rehypePrism from '@mapbox/rehype-prism';

export default defineConfig({
  base: '/portfolio/',
  assetsInclude: ['**/*.glb', '**/*.hdr', '**/*.glsl'],
  build: {
    assetsInlineLimit: 1024,
  },
  server: {
    port: 7777,
  },
  plugins: [
    mdx({
      rehypePlugins: [[rehypeImgSize, { dir: 'public' }], rehypeSlug, rehypePrism],
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      providerImportSource: '@mdx-js/react',
    }),
    remix({
      ssr: false,
      basename: '/portfolio/',
      routes(defineRoutes) {
        return defineRoutes(route => {
          route('/', 'routes/home/route.js', { index: true });
        });
      },
    }),
    jsconfigPaths(),
    {
      name: 'html-transform',
      transformIndexHtml(html) {
        return html.replace(
          '<head>',
          `<head>
    <meta property="og:image" content="https://dianarehan.github.io/portfolio/social-image.png" />
    <meta property="og:image:width" content="1280" />
    <meta property="og:image:height" content="800" />
    <meta property="og:title" content="Diana Rehan | Software Engineer" />
    <meta property="og:description" content="Portfolio of Diana Rehan - Software Engineer & XR Developer" />
    <meta property="og:url" content="https://dianarehan.github.io/portfolio" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:site" content="@diana_rehan" />
    <meta property="twitter:creator" content="@diana_rehan" />
    <meta property="twitter:title" content="Diana Rehan | Software Engineer" />
    <meta property="twitter:description" content="Portfolio of Diana Rehan - Software Engineer & XR Developer" />
    <meta property="twitter:image" content="https://dianarehan.github.io/portfolio/social-image.png" />`
        );
      },
    },
  ],
});
