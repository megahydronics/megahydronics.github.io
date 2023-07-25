import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/kit/vite'

const dev = process.argv.includes('dev')

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: 'index.html',
		}),
		paths: {
			base: dev ? '' : process.env.BASE_PATH,
		}
	},
	preprocess: vitePreprocess()
}

export default config
