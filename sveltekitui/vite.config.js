import { sveltekit } from '@sveltejs/kit/vite';
import path from "path"

/** @type {import('vite').UserConfig} */
const config = {
	// resolve: {
	// 	alias: {
	// 		'$components': path.resolve('./src/components'),
	// 	}
	// },
	plugins: [sveltekit()]
};

export default config;
