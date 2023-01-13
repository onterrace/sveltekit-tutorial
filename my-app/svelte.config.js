import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		// paths: {
		// 	assets: '/github/latteon/sveltekit-tutorial/my-app/src/resources'
		// 	base: '/resources'
		// }
	}
};

export default config;
