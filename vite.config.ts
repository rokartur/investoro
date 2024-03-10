import react from '@vitejs/plugin-react'
import { defineConfig, splitVendorChunkPlugin } from 'vite'

export default defineConfig(({ mode }) => {
	return {
		plugins: [
			react(),
			splitVendorChunkPlugin(),
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
			alias: {
				src: '/src',
			},
			extensions: ['.ts', '.tsx', '.js', '.css', '.scss'],
		},
		compilerOptions: {
			baseUrl: '.',
			paths: {
				'src/*': ['./src/*'],
			},
		},
		manualChunks: {
			lodash: ['lodash'],
		},
		css: {
			modules: {
				generateScopedName: '[hash:base64:12]',
			},
		},
		json: {
			namedExports: false,
		},
		esbuild: {
			logOverride: {
				'this-is-undefined-in-esm': 'silent',
			},
		},
	}
})
