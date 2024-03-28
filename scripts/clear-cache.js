const fs = require('fs');
const { join: joinPath } = require('path');

const cacheDir = joinPath(__dirname, '..', 'node_modules/.cache');
fs.rmSync(cacheDir, { recursive: true, force: true });
console.log('Cache is cleared');

// or use rimraf package: rimraf ./node_modules/.cache
