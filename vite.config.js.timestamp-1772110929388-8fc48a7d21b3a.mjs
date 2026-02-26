// vite.config.js
import { vitePlugin as remix } from "file:///F:/portfolio/node_modules/@remix-run/dev/dist/index.js";
import { defineConfig } from "file:///F:/portfolio/node_modules/vite/dist/node/index.js";
import jsconfigPaths from "file:///F:/portfolio/node_modules/vite-jsconfig-paths/dist/index.mjs";
import mdx from "file:///F:/portfolio/node_modules/@mdx-js/rollup/index.js";
import remarkFrontmatter from "file:///F:/portfolio/node_modules/remark-frontmatter/index.js";
import remarkMdxFrontmatter from "file:///F:/portfolio/node_modules/remark-mdx-frontmatter/index.js";
import rehypeImgSize from "file:///F:/portfolio/node_modules/rehype-img-size/index.js";
import rehypeSlug from "file:///F:/portfolio/node_modules/rehype-slug/index.js";
import rehypePrism from "file:///F:/portfolio/node_modules/@mapbox/rehype-prism/index.js";
var vite_config_default = defineConfig({
  base: "/portfolio/",
  assetsInclude: ["**/*.glb", "**/*.hdr", "**/*.glsl", "**/*.JPG"],
  build: {
    assetsInlineLimit: 1024
  },
  server: {
    port: 7777
  },
  plugins: [
    mdx({
      rehypePlugins: [[rehypeImgSize, { dir: "public" }], rehypeSlug, rehypePrism],
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      providerImportSource: "@mdx-js/react"
    }),
    remix({
      ssr: false,
      basename: "/portfolio/",
      routes(defineRoutes) {
        return defineRoutes((route) => {
          route("/", "routes/home/route.js", { index: true });
        });
      }
    }),
    jsconfigPaths()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxwb3J0Zm9saW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXHBvcnRmb2xpb1xcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovcG9ydGZvbGlvL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgdml0ZVBsdWdpbiBhcyByZW1peCB9IGZyb20gJ0ByZW1peC1ydW4vZGV2JztcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCBqc2NvbmZpZ1BhdGhzIGZyb20gJ3ZpdGUtanNjb25maWctcGF0aHMnO1xyXG5pbXBvcnQgbWR4IGZyb20gJ0BtZHgtanMvcm9sbHVwJztcclxuaW1wb3J0IHJlbWFya0Zyb250bWF0dGVyIGZyb20gJ3JlbWFyay1mcm9udG1hdHRlcic7XHJcbmltcG9ydCByZW1hcmtNZHhGcm9udG1hdHRlciBmcm9tICdyZW1hcmstbWR4LWZyb250bWF0dGVyJztcclxuaW1wb3J0IHJlaHlwZUltZ1NpemUgZnJvbSAncmVoeXBlLWltZy1zaXplJztcclxuaW1wb3J0IHJlaHlwZVNsdWcgZnJvbSAncmVoeXBlLXNsdWcnO1xyXG5pbXBvcnQgcmVoeXBlUHJpc20gZnJvbSAnQG1hcGJveC9yZWh5cGUtcHJpc20nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBiYXNlOiAnL3BvcnRmb2xpby8nLFxyXG4gIGFzc2V0c0luY2x1ZGU6IFsnKiovKi5nbGInLCAnKiovKi5oZHInLCAnKiovKi5nbHNsJywgJyoqLyouSlBHJ10sXHJcbiAgYnVpbGQ6IHtcclxuICAgIGFzc2V0c0lubGluZUxpbWl0OiAxMDI0LFxyXG4gIH0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBwb3J0OiA3Nzc3LFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgbWR4KHtcclxuICAgICAgcmVoeXBlUGx1Z2luczogW1tyZWh5cGVJbWdTaXplLCB7IGRpcjogJ3B1YmxpYycgfV0sIHJlaHlwZVNsdWcsIHJlaHlwZVByaXNtXSxcclxuICAgICAgcmVtYXJrUGx1Z2luczogW3JlbWFya0Zyb250bWF0dGVyLCByZW1hcmtNZHhGcm9udG1hdHRlcl0sXHJcbiAgICAgIHByb3ZpZGVySW1wb3J0U291cmNlOiAnQG1keC1qcy9yZWFjdCcsXHJcbiAgICB9KSxcclxuICAgIHJlbWl4KHtcclxuICAgICAgc3NyOiBmYWxzZSxcclxuICAgICAgYmFzZW5hbWU6ICcvcG9ydGZvbGlvLycsXHJcbiAgICAgIHJvdXRlcyhkZWZpbmVSb3V0ZXMpIHtcclxuICAgICAgICByZXR1cm4gZGVmaW5lUm91dGVzKHJvdXRlID0+IHtcclxuICAgICAgICAgIHJvdXRlKCcvJywgJ3JvdXRlcy9ob21lL3JvdXRlLmpzJywgeyBpbmRleDogdHJ1ZSB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAganNjb25maWdQYXRocygpLFxyXG4gIF0sXHJcbn0pO1xyXG5cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwTixTQUFTLGNBQWMsYUFBYTtBQUM5UCxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLG1CQUFtQjtBQUMxQixPQUFPLFNBQVM7QUFDaEIsT0FBTyx1QkFBdUI7QUFDOUIsT0FBTywwQkFBMEI7QUFDakMsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxpQkFBaUI7QUFFeEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sZUFBZSxDQUFDLFlBQVksWUFBWSxhQUFhLFVBQVU7QUFBQSxFQUMvRCxPQUFPO0FBQUEsSUFDTCxtQkFBbUI7QUFBQSxFQUNyQjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxNQUNGLGVBQWUsQ0FBQyxDQUFDLGVBQWUsRUFBRSxLQUFLLFNBQVMsQ0FBQyxHQUFHLFlBQVksV0FBVztBQUFBLE1BQzNFLGVBQWUsQ0FBQyxtQkFBbUIsb0JBQW9CO0FBQUEsTUFDdkQsc0JBQXNCO0FBQUEsSUFDeEIsQ0FBQztBQUFBLElBQ0QsTUFBTTtBQUFBLE1BQ0osS0FBSztBQUFBLE1BQ0wsVUFBVTtBQUFBLE1BQ1YsT0FBTyxjQUFjO0FBQ25CLGVBQU8sYUFBYSxXQUFTO0FBQzNCLGdCQUFNLEtBQUssd0JBQXdCLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFBQSxRQUNwRCxDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsY0FBYztBQUFBLEVBQ2hCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
