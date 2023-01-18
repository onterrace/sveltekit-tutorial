import adapter from '@sveltejs/adapter-auto';
import path from "path"

// import adapter from '@sveltejs/adapter-netlify';
// import vercel from '@sveltejs/adapter-vercel';
// import adapter from '@sveltejs/adapter-static';
// import adapter from '@sveltejs/adapter-node';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		appDir: "_static",
		// outDir: "build", 
		alias : {
			'$components': path.resolve('./src/components'),
		},
		files: { 
			// defualt 경로는 static인데 resources로 변경 
			assets:  'resources'
		},
		version : {
			name : "0.0.1",
			pollInterval: 0
		},
		// paths: { 
		// 	// assets: "http://image.jtbcplus.kr/data/contents/jam_photo",
		// 	// base: "/people"
		// }
		
	},
};

// const config =  {
//   kit: {
//     adapter: adapter({
//       // default options are shown. On some platforms
//       // these options are set automatically — see below
//       pages: 'build',
//       assets: 'build',
//       // fallback: null,
//       precompress: false,
//       strict: true,
// 			// paths: {
// 			// 	base: '/ui'
// 			// }
//     })
//   }
// };




// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		adapter: adapter({
// 			edge: false,
// 			split: false,
// 		})
// 	}
// };



// const config = {
//   kit: {
//     // default options are shown
//     adapter: vercel({
//       // if true, will deploy the app using edge functions
//       // (https://vercel.com/docs/concepts/functions/edge-functions)
//       // rather than serverless functions
//       edge: false,

//       // an array of dependencies that esbuild should treat
//       // as external when bundling functions
//       external: [],

//       // if true, will split your app into multiple functions
//       // instead of creating a single one for the entire app
//       split: false
//     })
//   }
// };

export default config;
