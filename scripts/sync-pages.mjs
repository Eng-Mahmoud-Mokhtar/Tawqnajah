import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const BUILD_DIR = join(ROOT, 'build');
const DOCS_DIR = join(ROOT, 'docs');

if (!existsSync(BUILD_DIR)) {
  console.error('Missing build/ folder. Run `npm run build` first.');
  process.exit(1);
}

// Reset docs/
if (existsSync(DOCS_DIR)) {
  rmSync(DOCS_DIR, { recursive: true, force: true });
}
mkdirSync(DOCS_DIR, { recursive: true });

// Copy build/* -> docs/
cpSync(BUILD_DIR, DOCS_DIR, { recursive: true });

// Ensure .nojekyll
writeFileSync(join(DOCS_DIR, '.nojekyll'), '');

// Ensure docs/index.html contains restore script for ?p=
const indexPath = join(DOCS_DIR, 'index.html');
let indexHtml = readFileSync(indexPath, 'utf8');

// Minimal idempotent restore script
const restoreScript =
  "<script>(function(){try{var s=new URLSearchParams(window.location.search);var p=s.get('p');if(p){window.history.replaceState(null,'',p);}}catch(e){}})();</script>";

if (!indexHtml.includes("s.get('p')") && !indexHtml.includes('replaceState')) {
  // CRA puts <title> before scripts; inject right after <title>..</title> for safety.
  indexHtml = indexHtml.replace(/<title>([\s\S]*?)<\/title>/i, (m) => m + restoreScript);
} else if (!indexHtml.includes("s.get('p')")) {
  // If there's a replaceState but not our param logic, still inject.
  indexHtml = indexHtml.replace(/<title>([\s\S]*?)<\/title>/i, (m) => m + restoreScript);
}
writeFileSync(indexPath, indexHtml);

// Ensure docs/404.html exists (SPA fallback)
const repo = '/Tawqnajah';
const notFoundHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="refresh" content="0; url=${repo}/" />
    <script>
      (function () {
        var l = window.location;
        var repo = '${repo}';
        var path = l.pathname;
        if (path.startsWith(repo)) {
          path = path.slice(repo.length);
        }
        var newUrl = repo + '/?p=' + encodeURIComponent(path + l.search + l.hash);
        l.replace(newUrl);
      })();
    </script>
    <title>Redirecting…</title>
  </head>
  <body>
    Redirecting…
  </body>
</html>
`;
writeFileSync(join(DOCS_DIR, '404.html'), notFoundHtml);

console.log('Synced build/ to docs/ with SPA fallback and restore script.');
