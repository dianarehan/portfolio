import { formatTimecode, readingTime } from '~/utils/timecode';

// Static post data for SPA mode
const postModules = import.meta.glob('../articles.*.mdx', { eager: true });
const postRawModules = import.meta.glob('../articles.*.mdx', { query: '?raw', import: 'default', eager: true });

export function getPosts() {
    const posts = Object.entries(postModules).map(([file, post]) => {
        // Extract slug from filename: ../articles.hello-world.mdx -> hello-world
        const slug = file.replace('../articles.', '').replace('.mdx', '');

        const rawContent = postRawModules[file] || '';
        const readTime = readingTime(rawContent);
        const timecode = formatTimecode(readTime);

        return {
            slug,
            timecode,
            frontmatter: post.frontmatter,
        };
    });

    return sortBy(posts, post => post.frontmatter.date, 'desc');
}

function sortBy(arr, key, dir = 'asc') {
    return arr.sort((a, b) => {
        const res = compare(key(a), key(b));
        return dir === 'asc' ? res : -res;
    });
}

function compare(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}
