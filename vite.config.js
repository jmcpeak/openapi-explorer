import NodeGlobalsPolyfillPlugin from '@esbuild-plugins/node-globals-polyfill';
import RollupNodePolyFill from 'rollup-plugin-polyfill-node';
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [
        RollupNodePolyFill()
      ]
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis'
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({ buffer: true })
      ]
    }
  },
  plugins: [react()],
})
