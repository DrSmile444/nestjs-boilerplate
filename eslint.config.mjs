import { defineConfig } from 'eslint/config';

import nestEslint from './.eslint/nest.eslint.mjs';
import nodeConfigs from './.eslint/node.eslint.mjs';

export default defineConfig([
  // Apply this config to js and ts files only
  {
    name: 'Source Files to scan',
    files: ['**/*.{js,mjs,cjs,ts}'],
  },
  // Node config
  ...nodeConfigs,
  // Vitest rules for testing
  ...nestEslint,
]);
