import tsconfigPaths from 'vite-tsconfig-paths'; // only if using custom tsconfig paths
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {},
    plugins: [tsconfigPaths()], // only if using custom tsconfig paths
});
