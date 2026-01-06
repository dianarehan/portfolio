import fs from 'fs';
import path from 'path';

const filePath = path.join('build', 'client', 'index.html');

try {
    let html = fs.readFileSync(filePath, 'utf8');

    const metaTags = `
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
    <meta property="twitter:image" content="https://dianarehan.github.io/portfolio/social-image.png" />
  `;

    // Inject meta tags after <head>
    html = html.replace('<head>', `<head>${metaTags}`);

    fs.writeFileSync(filePath, html);
    console.log('Successfully injected social meta tags into index.html');
} catch (error) {
    console.error('Error injecting meta tags:', error);
    process.exit(1);
}
