const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'node_modules', '@mediapipe', 'tasks-vision', 'wasm');
const destDir = path.join(__dirname, '..', 'public', 'wasm');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);
const destFiles = fs.readdirSync(destDir);
if (destFiles.length === 0 && files.length > 0) {
    for (const file of files) {
        const srcPath = path.join(srcDir, file);
        const destPath = path.join(destDir, file);
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${file}`);
    }
} else if (files.length === 0) {
    console.log('No files found in the source directory to copy.');
} else {
    console.log('No files to copy. The destination directory already contains files.');
}
