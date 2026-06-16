const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'dist');
const indexPath = path.join(distDir, 'index.html');
const fallbackPath = path.join(distDir, '404.html');

if (fs.existsSync(indexPath)) {
  try {
    fs.copyFileSync(indexPath, fallbackPath);
    console.log('Copied index.html to 404.html');
  } catch (err) {
    console.error('Failed to copy index.html to 404.html', err);
    process.exit(1);
  }
} else {
  console.error('dist/index.html not found. Run `npm run build` first.');
  process.exit(1);
}
