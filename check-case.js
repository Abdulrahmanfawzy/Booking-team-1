import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? 
            walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

function checkImports(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const importRegex = /import\s+.*?from\s+['"](.*?)['"]/g;
    let match;
    while ((match = importRegex.exec(content)) !== null) {
        const importPath = match[1];
        if (importPath.startsWith('.')) {
            const absoluteDir = path.dirname(filePath);
            const absoluteImportPath = path.resolve(absoluteDir, importPath);
            
            // Try to find the exact file
            checkExactMatch(absoluteImportPath, filePath, importPath);
        }
    }
}

function checkExactMatch(importPath, sourceFile, originalImport) {
    // If it has no extension, we need to check .js, .jsx, .ts, .tsx, /index.ts, etc.
    const extensions = ['', '.js', '.jsx', '.ts', '.tsx', '/index.js', '/index.ts', '/index.jsx', '/index.tsx', '.css'];
    
    let found = false;
    let actualPathFound = null;

    for (const ext of extensions) {
        const fullPath = importPath + ext;
        if (fs.existsSync(fullPath)) {
            // It exists (case-insensitive on Windows)
            // Let's check the actual case by reading the directory
            const dir = path.dirname(fullPath);
            const base = path.basename(fullPath);
            if (fs.existsSync(dir)) {
                const files = fs.readdirSync(dir);
                if (!files.includes(base)) {
                    console.error(`Case mismatch in ${sourceFile}: imported as '${originalImport}' but actual file is likely different case.`);
                    const actualFile = files.find(f => f.toLowerCase() === base.toLowerCase());
                    if (actualFile) {
                        console.error(`  -> Found actual file: ${actualFile}`);
                    }
                }
            }
            found = true;
            break;
        }
    }
}

walkDir('./src', (filePath) => {
    if (filePath.endsWith('.js') || filePath.endsWith('.jsx') || filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
        checkImports(filePath);
    }
});
