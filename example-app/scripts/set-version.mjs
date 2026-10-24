#!/usr/bin/env node

// Generates `src/app/version.ts` from `package.json` so the version shown in
// the UI cannot drift from the package metadata.
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const { version } = JSON.parse(readFileSync(join(projectRoot, 'package.json'), 'utf8'));
const target = join(projectRoot, 'src', 'app', 'version.ts');

writeFileSync(target, `export const APP_VERSION = '${version}';\n`, 'utf8');

console.log(`Wrote version ${version} to ${target}`);
