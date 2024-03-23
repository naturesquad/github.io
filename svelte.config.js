import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { APP_REDIRECTS } from './src/redirect.js';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: 'index.html',
			pages: 'build/',
		}),
		paths: {
			base: dev ? '' : process.env.BASE_PATH,
		},
		prerender: {
			entries: ['*', ...Object.keys(APP_REDIRECTS)],
		}
	},
	preprocess: vitePreprocess()
};

export default config;