import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// fallback: 'index.html',
			strict: true,
			precompress: false,
			pages: 'build',
			assets: 'build',
			trailingSlash: 'always',
		}),
	},
	preprocess: vitePreprocess()
}

export default config
