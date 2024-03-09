import react from '@vitejs/plugin-react'
import scss from 'rollup-plugin-scss'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import svgr from 'vite-plugin-svgr'

export default defineConfig(({ mode }) => {
	return {
		plugins: [
			react(),
			splitVendorChunkPlugin(),
			scss(),
			svgr({
				svgrOptions: { exportType: 'named', ref: true },
				include: '**/*.svg',
			}),
		],
		publicDir: 'src/public',
		build: {
			chunkSizeWarningLimit: 1024,
			rollupOptions: {
				output: {
					inlineDynamicImports: false,
				},
			},
		},
		resolve: {
			extensions: ['.ts', '.tsx', '.js', '.css', '.scss'],
		},
		json: {
			namedExports: false,
		},
		esbuild: {
			logOverride: {
				'this-is-undefined-in-esm': 'silent',
			},
		},
		manualChunks: {
			lodash: ['lodash'],
		},
	}
})
